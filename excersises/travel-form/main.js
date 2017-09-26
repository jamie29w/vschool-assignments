document.getElementById("datButtonDo").addEventListener("click", function() {
    
    // Best ways to access data from a form
    // var fName = document.travelForm.fName.value;
    // var fName = document.getElementById("travelForm").fName.value;
    
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var age = document.getElementById("age").value;

    var gender = document.getElementById("travelForm").genderOpts.value

    var destOpts = document.getElementsByName("destOpts");
    var destination = [];
    for (var i = 0; i < destOpts.length; i++) {
        if (destOpts[i].checked === true) {
            destination.push(destOpts[i].value);
        }
    };

    var dietPrefs = document.getElementsByName("dietPrefs");
    var dietPreferance = [];
    for (var i = 0; i < dietPrefs.length; i++) {
        if (dietPrefs[i].checked === true) {
            dietPreferance.push(dietPrefs[i].value);
        }
    };
        
    alert("First name: " + fName + "\n" +
          "Last name: " + lName + "\n" +
          "Age: " + age + "\n" +
          "Gender: " + gender + "\n" +
          "Destination(s): " + destination + "\n" +
          "Dietary Preference(s): " + dietPreferance
    );
});