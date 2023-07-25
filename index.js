const express = require('express');
const path = require('path');
const app = express();

//     "build": "react-scripts build",


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname + '/client/build/index.html')) 
});