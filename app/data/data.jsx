var data=[
    {
        "order": 1,
        "name": "First Arrangement",
        "modules": [
            {
                "type": "global",
                "image_src": "s3/media/images/cessna.jpg"
            },
            {
                "type": "event",
                "events": [
                    {
                        "date": "04-20-2016",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Lincoln Center Plaza",
                        "title": "Infor + Saleslogix 2014 Global Conference",
                    },
                    {
                        "date": "04-20-2017",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Javits Center",
                        "title": "SAP 2017 Conference",
                    },
                    {
                        "date": "04-20-2016",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Lincoln Center Plaza",
                        "title": "Saleslogix 2016 Conference",
                    }
                ]
            },
            {
                "type": "weather",
                "api": "api.openweathermap.org/data/2.5/weather?q=NewYork",
            },
            {
                "type": "transit",
                "api": "http://web.mta.info/status/serviceStatus.txt"
            },
            {
                "type": "meeting",
                "title": "August Meetings",
                "meetings": [
                    {
                        "date": "04-20-2016",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Hook & Loop NYC",
                        "floor": 3,
                        "room": "Marsalis",
                        "title": "Infor + Saleslogix 2014 Global Conference",
                    }
                ]
            }
        ]
    },
    {
        "order": 2,
        "name": "Second Arrangement",
        "modules": [
            {
                "type": "global",
                "image_src": "s3/media/images/cessna.jpg"
            },
            {
                "type": "customer_highlight",
                "title": "musicians",
                "image": "s3/media/images/cessna.jpg",
                "description": "musicians test description"
            },
            {
                "type": "department_highlight",
                "title": "nasa",
                "image": "s3/media/images/cessna.jpg",
                "description": "NASA test description"
            },
            {
                "type": "meeting",
                "title": "September Meetings",
                "meetings": [
                    {
                        "date": "04-20-2016",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Hook & Loop NYC",
                        "floor": 3,
                        "room": "Marsalis",
                        "title": "Infor + Saleslogix 2014 Global Conference",
                    },
                    {
                        "date": "04-20-2016",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Hook & Loop NYC",
                        "floor": 3,
                        "room": "Marsalis",
                        "title": "Infor + Saleslogix 2014 Global Conference",
                    },
                    {
                        "date": "04-20-2016",
                        "start_time": "11:00 am",
                        "end_time": "11:00 am",
                        "location": "Hook & Loop NYC",
                        "floor": 3,
                        "room": "Marsalis",
                        "title": "Infor + Saleslogix 2014 Global Conference",
                    }
                ]
            },
            {
                "type": "news",
                "title": "rss",
                "source": "rss.com",
                "date": "2015-08-11"
            },
             {
                "type": "weather",
                "api": "api.openweathermap.org/data/2.5/weather?q=NewYork",
            }
        ]
    },
    {
        "order": 3,
        "name": "Third Arrangement",
        "modules": [
            {
                "type": "clock",
                "apis":[
                    {
                        "type": "weather",
                        "api": "api.openweathermap.org/data/2.5/weather?q=NewYork"
                    },
                    {
                        "type": "transit",
                        "api": "http://web.mta.info/status/serviceStatus.txt"
                    }
                ]
            }
        ]
    }
]
	
module.exports=data;