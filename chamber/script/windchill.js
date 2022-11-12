function chill() {

    var temp = document.getElementById('temp').textContent;
    var mph = document.getElementById('mph').textContent;

    var windchill;

    windchill = 35.74 + 0.6215*(temp) - 35.75*(Math.pow(mph, 0.16)) + 0.4275*(temp)*(Math.pow(mph, 0.16));

    let n = windchill.toFixed(1);

    document.getElementById('windchill').innerHTML = n; 

}

chill();