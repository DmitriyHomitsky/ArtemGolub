    /** @jsx React.DOM */

     
var Reflux=require('reflux');
var React = require('react');
var Data=require('data/data'); 


var Module1 = React.createClass({

  render:function(){
        var settings = {
      speed: 1000,
      autoplay:true,
      autoplaySpeed:5000,
      arrows:false,
    }; 
    return (
      <Slider className="col-md-8"  {...settings}>
        <div  style={{width:"200px",height:"500px",backgroundColor: "#a1dafc"}}>1</div>
        <div  style={{width:"200px",height:"500px",backgroundColor: "#a1dafc"}}>2</div>
        <div  style={{width:"200px",height:"500px",backgroundColor: "#a1dafc"}}>3</div>
      </Slider>
    );
  },
});

var Module2 = React.createClass({
  render:function(){
      var settings = {
      speed: 1000,
      autoplay:true,
      autoplaySpeed:3000,
      arrows:false,
    };
    return (
      <Slider className="col-md-4"  {...settings}>
        <div  style={{width:"100px",height:"200px",backgroundColor: "#66dad2"}}>1</div>
        <div  style={{width:"100px",height:"200px",backgroundColor: "#66dad2"}}>2</div>
        <div  style={{width:"100px",height:"200px",backgroundColor: "#66dad2"}}>3</div>
      </Slider>
    );
    // return <div className="col-md-2" style={{width:"100px",height:"100px",backgroundColor: "blue"}}>sdf</div>
  },
});
var Module3 = React.createClass({
  render:function(){
      var settings = {
      speed: 1000,
      autoplay:true,
      autoplaySpeed:3000,
      arrows:false,
    };
    return (
      <Slider className="col-md-4"  {...settings}>
        <div  style={{width:"100px",height:"1000px",backgroundColor: "#b575d6"}}>1</div>
        <div  style={{width:"100px",height:"1000px",backgroundColor: "#b575d6"}}>2</div>
        <div  style={{width:"100px",height:"1000px",backgroundColor: "#b575d6"}}>3</div>
      </Slider>
    );
    // return <div className="col-md-2" style={{width:"100px",height:"100px",backgroundColor: "blue"}}>sdf</div>
  },
});

var Metro = React.createClass({
  // i1Type:0,
  // i2Type:0,
  // i3Type:0,
  // getLast1Type:function(){

  // },
  getInitialState:function(){
    return {
      DataType1:[], 
      DataType2:[],
      DataType3:[],
    }
  },  
  // componentDidMount: function(){
  // },
  render: function() {
    return (
      <div className="container">
        <div className="row">
            <Module1/>
            <Module2/>
            <Module3/>
        </div>
      </div>
    );
  }
});
var StyleRight={
  MozTransform: "matrix(a, c, b, d, tx, ty)", /* Firefox 3.5+ */ 
  WebkitTransform: "matrix(a, c, b, d, tx, ty)", /* Safari 3.1+ и Chrome 2.0+ */
  OTransform: "matrix(a, c, b, d, tx, ty)", /* Opera 10.5+ */
  MsTransform: "matrix(a, c, b, d, tx, ty)" /* IE 9.0 */
}
// .successfully-saved.hide-opacity{
//     opacity: 0;
// }

// .successfully-saved {
//     color: #FFFFFF;
//     text-align: center;

//     -webkit-transition: opacity 3s ease-in-out;
//     -moz-transition: opacity 3s ease-in-out;
//     -ms-transition: opacity 3s ease-in-out;
//     -o-transition: opacity 3s ease-in-out;
//      opacity: 1;
// }

// sdfds



var heightK=100;
var widthK=200; 

var active= {
  transition: "all .3s ease"
}
var Metro2 = React.createClass({
  getSize:function(width,height){
    var size={};
    size.height=height;
    size.width=width;
    return size;
  },
   getPos:function(left,top){
    var pos={};
    pos.top=top;
    pos.left=left;
    return pos;
  },
  getStyle:function(color,size,position){
      return {
        backgroundColor:color,
        width:size.width*widthK+"px",
        height:size.height*heightK+"px",
        position: "absolute",
        left: position.left*widthK+"px",
        top: position.top*heightK+"px",
        // opacity: "0.5",
        // transform: "scale(1)"

      }
  },
  componentDidMount: function(){
        this.timer = setInterval(this.tick, 2000);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  getInitialState: function(){
      return { 
        whoActive:1,
       };
  },
  tick: function(){
    if(this.state.whoActive==3) this.setState({whoActive: 1});
    else this.setState({whoActive: this.state.whoActive+1});
  },
  render: function() {
    var class1="hideNB";
    var class2="hideNB";
    var class3="hideNB";
    if(this.state.whoActive==1) {class1="activeNB";class3="hideNB normal"}
    if(this.state.whoActive==2) {class2="activeNB";class1="hideNB normal"}
    if(this.state.whoActive==3) {class3="activeNB";class2="hideNB normal"}
    return (
      <div >
        <div className={class1}>
            <div className="block block-1" style={this.getStyle("#C287D4",this.getSize(2,3),this.getPos(0,0))}></div>
            <div className="block block-2" style={this.getStyle("#FD31A9",this.getSize(1,1),this.getPos(2,0))}></div>
            <div className="block block-3" style={this.getStyle("#A53E4F",this.getSize(1,5),this.getPos(2,1))}></div>
            <div className="block block-4" style={this.getStyle("#3C8383",this.getSize(2,2),this.getPos(0,3))}></div>
            <div className="block block-5" style={this.getStyle("#381672",this.getSize(2,1),this.getPos(0,5))}></div>
            <div className="block block-6" style={this.getStyle("#8FC73C",this.getSize(2,3),this.getPos(0,6))}></div>
            <div className="block block-7" style={this.getStyle("#416960",this.getSize(1,3),this.getPos(2,6))}></div>
        </div>
        <div className={class2}>
            <div className="block block-1" style={this.getStyle("#C287D4",this.getSize(2,3),this.getPos(0,0))}></div>
            <div className="block block-2" style={this.getStyle("#FD31A9",this.getSize(1,1),this.getPos(2,0))}></div>
            <div className="block block-3" style={this.getStyle("#A53E4F",this.getSize(1,4),this.getPos(2,5))}></div>
            <div className="block block-4" style={this.getStyle("#3C8383",this.getSize(3,2),this.getPos(0,3))}></div>
            <div className="block block-5" style={this.getStyle("#381672",this.getSize(2,2),this.getPos(0,5))}></div>
            <div className="block block-6" style={this.getStyle("#8FC73C",this.getSize(2,2),this.getPos(0,7))}></div>
            <div className="block block-7" style={this.getStyle("#416960",this.getSize(1,2),this.getPos(2,1))}></div>
        </div>
        <div className={class3}>
            <div className="block block-1" style={this.getStyle("#C287D4",this.getSize(2,3),this.getPos(0,0))}></div>
            <div className="block block-2" style={this.getStyle("#FD31A9",this.getSize(1,1),this.getPos(2,0))}></div>
            <div className="block block-3" style={this.getStyle("#A53E4F",this.getSize(2,2),this.getPos(0,3))}></div>
            <div className="block block-4" style={this.getStyle("#3C8383",this.getSize(2,2),this.getPos(0,5))}></div>
            <div className="block block-5" style={this.getStyle("#381672",this.getSize(1,4),this.getPos(2,1))}></div>
            <div className="block block-6" style={this.getStyle("#8FC73C",this.getSize(1,4),this.getPos(2,5))}></div>
            <div className="block block-7" style={this.getStyle("#416960",this.getSize(2,2),this.getPos(0,7))}></div>
        </div>
      </div>
    );
  }
});
React.render(<Metro2 data={Data}/>, document.getElementById("data"));


