import express from 'express';
import cors from 'cors';
import api from './api/index.js';

const app = express();

//initializing port
const port = 3000;
//for serving static files
app.use(express.static('./api/public'))
//allows cors
app.use(cors());
//parses json
app.use(express.json());
//api endpoints

app.use('/api',api);


//listening for incoming requests
app.listen(port,(err)=>{
    if(err)throw err;
    console.log(`listening at port:${port}`);
})