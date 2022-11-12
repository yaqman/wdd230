function windchill() {

    var temp = document.getElementById('temp').textContent;
    var mph = document.getElementById('mph').textContent;

    var chill = Chill(temp, mph);
    document.getElementById("windchil").innerHTML = chill;
  }

  function Chill(temp, mph) {
    var windchill;
    if (temp < 75 && mph > 3) {
    windchill = 35.74 + 0.6215*(temp) - 35.75*(Math.pow(mph, 0.16)) + 0.4275*(temp)*(Math.pow(mph, 0.16));
    windchill = windchill.toFixed(0);
    } else {
      windchill = "(N/A)";
    }

    return windchill;
}