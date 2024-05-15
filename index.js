


























// console.log("hello zee");

// const API_key="31573e0bf39b0f985394688a05d99af3";

// function renderWeather(data){
//     let newPara=document.createElement('p');
//     newPara.textContent=`${data?.main?.temp.toFixed(2)} C`;
//     document.body.appendChild(newPara); 
// }   

// async function weather(){
//     // const city_name="goa";
//     const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q=goa&appid=31573e0bf39b0f985394688a05d99af3');
//     const data= await response.json();
//     console.log("weather data ->", data);
//     renderWeather(data);
    
// }

// async function latLongWeather(){
//     const response= await fetch("https://api.openweathermap.org/data/2.5/weather?q=goa&appid=31573e0bf39b0f985394688a05d99af3");
//     let data=await response.json();
//     console.log("weather ->", data);

//     renderWeather(data);
// }