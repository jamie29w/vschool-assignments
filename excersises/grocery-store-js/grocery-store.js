var shopper = {
    name: "Liza",
    age: 42,
    isFemale: true,
    shoppingFor: function() {
      console.log("I'm shopping for " + shopper.groceryCart [
          Math.floor(Math.random() * 4)
      ] + "!");  
    },
    groceryCart: [
        "milk",
        "chai",
        "salt",
        "coffee"
    ]
}

shopper.shoppingFor();


//var shopper = {
//    name: "Liza",
//    age: 42,
//    isFemale: true,
//    shopping: function() {
//      return("I'm shopping for " + shopper.groceryCart [
//          Math.floor(Math.random() * 3)
//      ] + "!");  
//    },
//    groceryCart: [
//        "milk",
//        "chai",
//        "salt"
//    ]
//}
//
//console.log(shopper.shopping());