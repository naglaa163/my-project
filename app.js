

/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const key ='&appid=208077db3e5bca1428f6aabb43c55ee1&units=imperial'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
    
document.getElementById('generate').addEventListener('click', performActions);


function performActions(event){
const zip = document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;
  

getData(baseURL, zip, key)
.then( (data)=>{
  
        
  postData('/addData', {temp: data.main.temp, date: newDate, content: feelings} )
  
     
  updateUI()
  
     
})
}
const getData = async (baseURL,code, key)=>{
      const response = await fetch(baseURL + code + key)
      console.log(response);
      try {
        const data = await response.json();
        console.log(data);
            
        return data;
        }
        catch(error) {
          console.log('error', error);
        }

}


  const postData = async (url = "", data = {}) => {
        const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify(data),
      });
          
        try {
          const newData = await res.json();
            return newData;
        } catch (error) {
            console.log("error", error);
          }
  };
  const updateUI = async () => {
        const req = await fetch('/all');
      
        try {
          const getResponse = await req.json();



          document.getElementById('date').innerHTML = `Date: ${getResponse.date}`;
          document.getElementById('temp').innerHTML = `Weather: ${getResponse.temp}`;
          document.getElementById('content').innerHTML = `I am Feeling: ${getResponse.content}`;
          
   
        } catch (error) {
            console.log('error', error);
       } 
      console.log(postData);
      }
    