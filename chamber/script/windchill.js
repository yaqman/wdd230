const url = 'https://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=c99481515e9cb2b9ee33aaec3bad8994&units=imperial'

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windchill = document.getElementById("windchill");
const windspeed = document.getElementById("mph");

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    if( currentTemp <= 50 & windspeed > 3){
        let windchill = 35.74 + 0.6215*(currentTemp) - 35.75*(Math.pow(windspeed, 0.16)) + 0.4275*(currentTemp)*(Math.pow(windspeed, 0.16));
        windchill = Math.round(windchill);
        document.getElementById("windchill").textContent = windchill;
    }else{
            document.getElementById("windchill").textContent = "N/A"
        } 
    }
requestData(url);