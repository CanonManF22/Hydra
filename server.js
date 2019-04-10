const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.get('/', (req, res)=>{
    res.send('hello world')
});

app.get('/HydraData', (req, res)=>{
    console.log('get hydra data');
    res.send('get hydra data');
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
