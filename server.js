
const app=require('./app.js');
// const dotenv=require('dotenv');

// dotenv.config({path:'./config.env'});
const port=process.env.port ||3000;


app.listen(port,function(){



})