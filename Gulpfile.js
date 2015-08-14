var gulp       = require('gulp'),
    browserify = require('gulp-browserify');
var livereload  = require('gulp-livereload');
var uglify = require('gulp-uglify');


gulp.task('production', function () { 

    gulp.src(['app/main.js'])
        .pipe(browserify({
            paths: ['./node_modules','./app'],
            extensions: ['.jsx'],
            packageCache: {},
            transform: ['reactify' ],
            cache: {}
        }))
        .pipe(uglify()) /*для зжатия js*/
        .pipe(gulp.dest('./public/'));

});



 

gulp.task('fast', function () { 
    var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
    var browserify = require('browserify');
    var watchify = require('watchify');
    var reactify = require('reactify'); 

    livereload.listen();
     var bro=browserify({entries: ['./app/main.js'],extensions: ['.jsx'],paths: ['./node_modules','./app'],
        transform: [reactify], // We want to convert JSX to normal javascript
        // debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true});
     var watcher  = watchify(bro); 
     return watcher
    .on('update', function () { // When any files update
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .on('error', function(error){
            console.log("\007");console.log(error.message);
        })
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/')).pipe(livereload());
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/'));
});


gulp.task('default', ['production']);



