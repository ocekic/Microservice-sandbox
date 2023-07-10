// @ts-nocheck
const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const posts = {};


app.get('/posts', (req,res)=>{
    res.send(posts);
});

app.post('/posts', (req,res)=>{

    // Generate a random id
    const id = randomBytes(4).toString('hex');

    // Get the title from the request body
    const {title} = req.body;

    // Add the post to the posts object
    posts[id] = {
        id,
        title,
    };

    res.status(201).send(posts[id]);

});

app.listen(4000,()=>{
    console.log('Listening on port 4000');
});