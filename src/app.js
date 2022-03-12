import express from 'express';
import cors from 'cors';
import api from './api/index.js';
//initializing port
const port = 5000;
const app = express();

//allows cors
app.use(cors());
app.use(express.json());

//api endpoints
app.use('/static',express.static('./api/public'));
app.use('/api',api);


//listening for incoming requests
app.listen(port,(err)=>{
    if(err)throw err;
    console.log(`listening at port:${port}`);   
})