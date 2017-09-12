var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//WU 1
function print(arr) {
    console.log(arr.join(" "));
}

print(lyrics);


//WU 2
function print(arr) {
    console.log(arr.reverse().join(" "));
}

print(lyrics);


//WU 3
function printEveryOther(arr) {
    var everyOtherLyric = [];
    
    for (var i = 0; i < arr.length; i +=2) {
        everyOtherLyric.push(arr[i]);
    }
    console.log(everyOtherLyric.join(" "));
}
printEveryOther(lyrics);

//WU 4
