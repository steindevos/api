let request = new XMLHttpRequest();
let APIKEY = "c4d3e943b5c2272cac5727aef44d5bcb";



function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    let sunsetTime = new Date(+newData.sys.sunset * 1000).toString();
    let temp = +newData.main.temp - 273.15;
    console.log(newData);
    let htmlString = "<div class='forecast-city'> " + newData.name + "</div>";
    htmlString += "<div><strong>Current Weather:</strong> " + newData.weather[0].description + "</div>";
    htmlString += "<img id='forecast-img' src='http://openweathermap.org/img/w/" + newData.weather[0].icon + ".png' />"; 
    htmlString += "<div ><i class='fas fa-thermometer-empty'></i><strong>  Temperature: </strong>" + Math.floor(temp) + " degrees</div>";
    htmlString += "<div><i class='fas fa-sun'></i><strong>  Sunset time: </strong>" + sunsetTime + "</div>";
    htmlString += "<div><i class='fab fa-mixcloud'></i><strong>  Expected wind speed/deg: </strong>" + newData.wind.speed + " / " + newData.wind.deg + "</div>";
    document.getElementById("data").innerHTML = htmlString;
    
}

function submitCity() {
    city = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKEY)

    request.send();
}

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>City not found. Please try again!</strong>";
    }
}
