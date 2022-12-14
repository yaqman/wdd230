const url = "https://api.openweathermap.org/data/2.5/forecast?lat=42.1181&lon=-88.0962&cnt=25&units=imperial&appid=c99481515e9cb2b9ee33aaec3bad8994"

const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const currenthumidity = document.querySelector("#current-humidity");
const windspeed = document.getElementById("current-mph");
const tomorrrowTemp = document.querySelector('#tomorrow-temp');
const tomorrowweatherIcon = document.querySelector('#tomorrowweather-icon');
const tomorrowcaptionDesc = document.querySelector('#tomorrow_figcaption');
const twodaysTemp = document.querySelector('#twodays-temp');
const twodaysweatherIcon = document.querySelector('#twodaysweather-icon');
const twodayscaptionDesc = document.querySelector('#twodays_figcaption');
const threedaysTemp = document.querySelector('#threedays-temp');
const threedaysweatherIcon = document.querySelector('#threedaysweather-icon');
const threedaysscaptionDesc = document.querySelector('#threedays_figcaption');
const captionDesc = document.querySelector('figcaption');

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
    tomorrrowTemp.innerHTML = `<strong>${weatherData.list[8].main.temp.toFixed(0)}</strong>`;
    twodaysTemp.innerHTML = `<strong>${weatherData.list[16].main.temp.toFixed(0)}</strong>`;
    threedaysTemp.innerHTML = `<strong>${weatherData.list[24].main.temp.toFixed(0)}</strong>`;
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML = `<strong>${weatherData.list[0].wind.speed.toFixed(0)}</strong>`;
    currenthumidity.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = desc;

    const tomorrow_iconsrc = `https://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`;
    const tomorrow_desc = weatherData.list[8].weather[0].description;
  
    tomorrowweatherIcon.setAttribute('src', tomorrow_iconsrc);
    tomorrowweatherIcon.setAttribute('alt', tomorrow_desc);

    tomorrowcaptionDesc.textContent = tomorrow_desc;

    const twodays_iconsrc = `https://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png`;
    const twodays_desc = weatherData.list[16].weather[0].description;
  
    twodaysweatherIcon.setAttribute('src', twodays_iconsrc);
    twodaysweatherIcon.setAttribute('alt', twodays_desc);

    twodayscaptionDesc.textContent = twodays_desc;

    const threedays_iconsrc = `https://openweathermap.org/img/w/${weatherData.list[24].weather[0].icon}.png`;
    const threedays_desc = weatherData.list[24].weather[0].description;
  
    threedaysweatherIcon.setAttribute('src', threedays_iconsrc);
    threedaysweatherIcon.setAttribute('alt', threedays_desc);

    threedaysscaptionDesc.textContent = threedays_desc;

}
requestData(url);