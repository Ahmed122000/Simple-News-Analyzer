//main import for express app
var path = require('path');
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

//import for .env file
const dotenv = require('dotenv'); 
dotenv.config();

//meaningcloud request body
const FormData = require("form-data")

//initalize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('dist'))

console.log(__dirname);

// Variables for url and api key
const api_url = 'https://api.meaningcloud.com/sentiment-2.1'
const key = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});


// POST Route
app.post('/api', async(req, res) =>{
    try{

        const blogUrl = req.body.url
        const bodyData = new FormData(); 
        bodyData.append("key", key);
        bodyData.append("url", blogUrl);
        bodyData.append('lang', "en");
    
        const response = await fetch(api_url, {
            method:'POST',
            body: bodyData, 
            redirect:'follow'
        });
        
        
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error from external API' });
        }

        const data = await response.json()
        const returnData = {
            'polarity': data.score_tag, 
            'subjectivity': data.subjectivity,
            'text-snippet': data.sentence_list
        }
        res.status(response.status).json(returnData)
    
    }catch(error){
        console.error("Error occurred: ", error)
        res.status(500).json("an error occurred while processing the input")
    }
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


