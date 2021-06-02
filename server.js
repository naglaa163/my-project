// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
    bodyParser = require('body-parser');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
const port = 4000
app.use(express.static('website'));
const server = app.listen(port, ()=>{
  console.log('server running');
    console.log(`running on localhost: ${port}`);
})  
    //GET route that returns the projectData object
app.get('/all',function (req, res){ 
    res.send(projectData);
})




// POST route


app.post('/addData', (req, res) => {
    let data = req.body
    console.log(data)
    
    projectData.date = data.date;
    projectData.temp = data.temp;
    projectData.content = data.content;;
    
    console.log(projectData)
    
})
