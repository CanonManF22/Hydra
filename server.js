const express = require('express');
const firebase = require("firebase");
const app = express();


var config = {
    apiKey: "AIzaSyCLmKxVPk1O1LKp-r5YTZe-IYKwaXjn00g",
    authDomain: "hydra-proto.firebaseapp.com",
    databaseURL: "https://hydra-proto.firebaseio.com",
    projectId: "hydra-proto",
    storageBucket: "hydra-proto.appspot.com",
    messagingSenderId: "58925529561"
  };

  firebase.initializeApp(config);

var ref = firebase.app().database().ref();
ref.once('value', ()=> console.log('value'))
.then(function (snap) {
console.log(snap.val());
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.get('/', (req, res)=>{
    res.send('hello world')
    
});

app.get('/HydraData', (req, res)=>{
    console.log('get hydra data');
    res.send({
        light: true,
        misting: true,
        pH: 7,
        temp: 69.69,
        waterLevel: "fair"
    });
});

app.get('/togglePump', (req, res)=>{
    console.log('toggle pump')
    res.send('toggle pump');
});

app.get('/toggleLights', (req, res)=>{
    console.log('toggle Lights')
    res.send('toggle Lights');
});

app.get('/restartPi', (req, res)=>{
    console.log('restart pi')
    res.send('restart pi');
});


