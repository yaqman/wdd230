let myDate = new Date();

let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

document.getElementById("currentDate").textContent = `Today is ${
  weekday[myDate.getDay()]
}, ${myDate.getDate()} ${month[myDate.getMonth()]} ${myDate.getFullYear()}`;

document.getElementById("lastmod").textContent = `Last Modified: ${document.lastModified}`;

document.querySelector("#copyright").textContent = `©${myDate.getFullYear()}`;

const meetingBanner = document.querySelector(".meeting_banner");

window.addEventListener("load", () => {
  
  if (myDate.getDay() < 3 && 
    myDate.getDay() > 0) {
    meetingBanner.style.display = "block";
  }
}, false);