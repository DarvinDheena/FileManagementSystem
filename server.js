const fs = require('fs');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app =  express();

app.use(express.json());
app.use(cors());

// to create a path '/' for filemanagement header

 app.get('/',(request,response)=>{
    response.send(`<h1>NODEJS FILEMANAGEMENT SYSTEM</h1>
        <h2> &nbsp&nbsp /create &nbsp : &nbsp to create a new text file </h2> 
        <h2> &nbsp&nbsp /read &nbsp : &nbsp to read/fetch all the files in that folder </h2> 
    `);
 })


// to create a textfile ccontent should be a current timestamp 
 app.get('/create',(request,response)=>{
    const content = new Date();
    const filename = content.getDate()+'-'+
                        content.getHours()+'Hr_'+
                        content.getMinutes()+'min';

    fs.writeFileSync(`./AllFiles/${filename}.txt`,`${content}`,(error)=>{
        console.log(error);
    });
    response.json({
        message : `${filename}.txt file created`
    })
 });

 // to fetch all the text files in that folder
 app.get('/read',(request,response)=>{
    const files = fs.readdirSync('./AllFiles');
    response.send(files);

 });
 
 // start a server
 const PORT = 3001 ;

 app.listen(PORT,()=>{
    console.log('Server running on Port Number 3001');
 })

