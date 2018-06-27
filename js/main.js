let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    let htmlString = "<strong>Name:</strong> " + newData.name;
    document.getElementById("data").innerHTML = htmlString; 
}

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         displayNicely(this.responseText);
    }
}

let appKey = "c4d3e943b5c2272cac5727aef44d5bcb"; 
request.open("GET", "https://swapi.co/api/people/1/")

request.send();