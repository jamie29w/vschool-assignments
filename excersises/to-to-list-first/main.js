//document.getElementById("add-todo").addEventListener("click", function(e) {
//    var newTodo = document.getElementById("new-todo-text");    
//    //easier way to create elements:
////    console.dir(document.getElementById("todo-list"));
//    var list = document.getElementById("todo-list");
//    list.innerHTML = "<li>" + newTodo.value + "</li>" + list.innerHTML;
//    //empty input box
//    newTodo.value = "";
//    newTodo.focus();
//});


document.getElementById("todo-form").addEventListener("submit", submitTodo);
// document.getElementById("todo-form").addEventListener("submit", function(e){});
                                                      
function submitTodo(e) {
    e.preventDefault();
    var newTodo = document.getElementById("new-todo-text");    
    
    var list = document.getElementById("todo-list");
    list.innerHTML = "<li>" + newTodo.value + "</li>" + list.innerHTML;
    //empty input box
    newTodo.value = "";
    newTodo.focus();
}









//document.getElementById("todo-form").addEventListener("submit", function (event) {
//    event.preventDefault();
//    var newTodo = document.getElementById("new-todo-text");    
//    
//    var list = document.getElementById("todo-list");
//    list.innerHTML = "<li>" + newTodo.value + "</li>" + list.innerHTML;
//    //empty input box
//    newTodo.value = "";
//    newTodo.focus();
//})




//    low level way to create elements:
//    var newLi = document.createElement("li");
//    document.getElementById("todo-list").appendChild(newLi);
//    var todoTextNode = document.createTextNode(newTodoText);
//    newLi.appendChild(todoTextNode);
