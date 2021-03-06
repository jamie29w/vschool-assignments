const btn = document.getElementById("btn");
const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPrice = document.getElementById("inputPrice");
const currList = document.getElementById("currList");

const getList = () => {
    axios.get("https://api.vschool.io/jamie/todo").then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            currList.innerHTML =
                "<input type='checkbox' id='inlineCheckbox1' value='option1'>  " +
                "<span class='toDoText'>" + response.data[i].title + "</span>" +
                "<span class='descriptionText'>  " + response.data[i].description + "</span>" +
                "<span class='priceText'>  $" + response.data[i].price + "</span>" + "<br>" +
                currList.innerHTML;
        };
    });
};

getList();

btn.addEventListener("click", function () {
    const newTodo = {
        title: inputTitle.value,
        description: inputDescription.value,
        price: inputPrice.value
    };
    console.log(newTodo);
    axios.post("https://api.vschool.io/jamie/todo", newTodo).then(function (response) {
        currList.innerHTML =
            "<input type='checkbox' id='inlineCheckbox1' value='option1'>  " +
            "<span class='toDoText'>" + response.data.title + "</span>" +
            "<span class='descriptionText'>  " + response.data.description + "</span>" +
            "<span class='priceText'>  $" + response.data.price + "</span>" + "<br>" + currList.innerHTML;
        console.log(response.data);
        inputTitle.value = "";
        inputDescription.value = "";
        inputPrice.value = "";
    });
});


//axios.delete("https://api.vschool.io/jamie/todo/59cd577e8e509d2c3e49e039");


//function notAFunc(containerOnly) {
//        var xhr = new XMLHttpRequest();
//
//    xhr.onreadystatechange = function() {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            console.log(JSON.parse(xhr.responseText));
//        }
//    }
//
//    xhr.open("GET", "https://swapi.co/api/starships/9");
//    xhr.send();
//
//    axios.get("https://api.vschool.io/jamie/todo").then(function(response) {
//        console.log(response.data);
//    });
//
//}
