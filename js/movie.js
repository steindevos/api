let xhr = new XMLHttpRequest();
let APIKEY = "35e16679c616a21b9ddebb66272c5902";


function submitMovie() {

    let query = document.getElementById("movieForm")["movie"].value;
    xhr.open("GET", "//api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}


function displayText(data) {
    data = JSON.parse(data);
    let printResults;

    let resultsArray = data.results;

    for (let i in resultsArray) {
        printResults += "<li class='target'>" + resultsArray[i].title + "</li>";
    }

    document.getElementById("overview").innerHTML = printResults;
    $("li").click(function() {
        
        let index = data.results.findIndex(x => x.title==this.innerHTML); 
        console.log(data.results); 
 
        let name = "<div><h2 class='section-movie-title'>" + data.results[index].title + "</h2></div>";
        let overview = "<div class='section-movie-info'><p>" + data.results[index].overview + "</p></div>";
        let poster = "<img class='section-img' src='https://image.tmdb.org/t/p/w500" + data.results[index].poster_path + "' />";
        let voteAverage ="<div><p class='section-vote-average'>" + data.results[index].vote_average + " / 10<p></div>"; 
        let totalVotes = "<div><p class='section-vote-total'>Total votes: " + data.results[index].vote_count + "<p></div>"; 
        let voteCount; 
        document.getElementById("title").innerHTML = name; 
        document.getElementById("vote").innerHTML = voteAverage; 
        document.getElementById("number-of-votes").innerHTML = totalVotes; 
        document.getElementById("overview").innerHTML = overview;
        document.getElementById("image").innerHTML = poster; 


    })
}


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayText(this.responseText);
    };
}
