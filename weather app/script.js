const ApiKey="27431c8aa10f6dd1db6d82db2f74f951";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serch =document.querySelector('.search input')
const serchbtn =document.querySelector('.search button')
const weathericon=document.querySelector('.weathericon')
async function cheakWeather(city)
{
const response =await fetch(ApiUrl + city + `&Appid=${ApiKey}`);

if(response.status ==404)
{
    document.querySelector('.error').style.display='block'
    document.querySelector('.weather').style.display='none'
} 
else{

    var data =await response.json();
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
if(data.weather[0].main == 'Clouds')
{
    weathericon.src=  "images/clouds.png"; 
}
else if(data.weather[0].main == 'Clear')
{
    weathericon.src=  "images/clear.png"; 
}
else if(data.weather[0].main == 'Rain')
{
    weathericon.src=  "images/rain.png"; 
}

else if(data.weather[0].main == 'Drizzle')
{
    weathericon.src=  "images/drizzle.png"; 
}
else if(data.weather[0].main == 'Mist')
{
    weathericon.src=  "images/mist.png"; 
} 
document.querySelector(".weather").style.display='block';
document.querySelector('.error').style.display='none';
}
}
serchbtn.addEventListener("click" ,()=>{
    cheakWeather(serch.value);
})
