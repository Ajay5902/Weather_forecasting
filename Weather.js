const apiKey = "8cfc83d97a6916d9a009d6a900130192";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiurl+city+`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data)



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
       

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

