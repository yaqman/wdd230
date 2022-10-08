let today = new Date(document.lastModified);

let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


document.getElementById("currentDate").innerHTML = weekday[today.getDay()] +

    ", " + today.getDate() + " " + months[today.getMonth()] + " " +

    today.getFullYear();
