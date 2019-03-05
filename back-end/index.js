// import {detailedVideos} from './vData';
const videos = require('./vData');
const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 
let detailedVideos = videos.detailedVideos;
app.use(bodyParser.urlencoded({ extended: false }));
let cors = require('cors');
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

let uniqid = require('uniqid');
app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));

let PORT = 8080;

app.get('/videos',(req,res)=>{
    res.json(detailedVideos);
})

app.get('/videos/:id',(req,res)=>{
    const targetId = req.params.id;
    const targetVideo = detailedVideos.find((videoObject)=>{
        return videoObject.id === targetId;
    })
    res.send(targetVideo);
})

app.post('/videos',(req,res)=>{
    let upload_video = {
        id: uniqid.process(),
        title: req.body.title,
        channel: "Scotty Cranmer",
        image: "https://www.w3schools.com/images/picture.jpg", 
        description:req.body.description , 
        views: "0",
        likes: "0",
        duration: "0:48",
        video: "http://techslides.com/demos/sample-videos/small.webm",
        timestamp: 1531007012000,
        comments: []
        };
    detailedVideos.push(upload_video);
    res.json(upload_video);
});
app.put('/videos/:id/likes',(res,req)=>{
    detailedVideos = req.body;
    res.json(req.body);
})

app.listen(PORT,()=>{
    console.log(`server starts to listen on PORT ${PORT}`);
})