var xhr = new XMLHttpRequest();

document.getElementById("pokeHeader").innerHTML = "List of #allThePokemon:";

xhr.onreadystatechange = function parsePokemon() {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var jsonPokeList = data.objects[0].pokemon;
        console.log(jsonPokeList);
        for (var i = 0; i < jsonPokeList.length; i++) {
            document.getElementById("pokeList").innerHTML += "<li>Pokemon's Name: " + data.objects[0].pokemon[i].name + " </li>";
            document.getElementById("pokeList").innerHTML += "<li>Resource uri: " + data.objects[0].pokemon[i].resource_uri + " </li>";
        };
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();
