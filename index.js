const express = require('express');
const fetch = require('node-fetch');
const app = express();

const port = 4200;
app.get("/activity", async function(request,response){
    const api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    response.json(jsonObj);
});
app.get("/param/:activity", async (request,response) => {
    const activity = request.params.activity;

    const api_url = `http://www.boredapi.com/api/activity?type=${activity}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});


app.get("/param/:education", async (request,response) => {
    const activity = request.params.activity;

    const api_url = `http://www.boredapi.com/api/activity?type=${education}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});



// const findaActivityById = (id) => {
//     const key = Object.keys(activity.activity).find(activity => activity.activity[activity].id === 'actvity')
//     return users.users[key]
//   }




app.listen(port, function(){
    console.log(`App listening on http://localhost:${port}`)
})