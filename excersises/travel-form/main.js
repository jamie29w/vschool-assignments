document.getElementById("datButtonDo").addEventListener("click", function() {
    
    // Best ways to access data from a form
    // var fName = document.travelForm.fName.value;
    // var fName = document.getElementById("travelForm").fName.value;
    
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let age = document.getElementById("age").value;

    let gender = document.getElementById("travelForm").genderOpts.value

    let destOpts = document.getElementsByName("destOpts");
    let destination = [];
    for (let i = 0; i < destOpts.length; i++) {
        if (destOpts[i].checked === true) {
            destination.push(destOpts[i].value);
        }
    };

    let dietPrefs = document.getElementsByName("dietPrefs");
    let dietPreferance = [];
    for (let i = 0; i < dietPrefs.length; i++) {
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