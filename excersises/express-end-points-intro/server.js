const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const tacoRoutes = require("./routes/tacoRoutes");
const burritoRoutes = require("./routes/burritoRoutes");

app.use(bodyParser.json());

//first param means if there is the reqest begins with this, don't use bodyParser middleware
app.use("/tacos", tacoRoutes);
app.use("/burritos", burritoRoutes);

app.listen(8008, () => {
    console.log(`server is running on port 8008`);
});

//DO NOT actually save data like this:
let tacos = [];

// app.get("/tacos", (req, res) => {
//     res.send(tacos);
// });
//
// app.post("/tacos", (req, res) => {
//     req.body._id = uuid();
//     tacos.push(req.body);
//     res.send(req.body);
// });
//
// app.delete("/tacos/:id", (req, res) => {
//     let found = false;
//     tacos = tacos.filter(taco => {
//         if (taco._id === req.params.id) {
//             found = true;
//             return false;
//         } else {
//             return true;
//         }
//     });
//     if (found) {
//         res.send({
//             message: `ITEM REMOVED SUCCESSFULLY`
//         });
//     } else {
//         res.send({
//             message: "ITEM NOT FOUND"
//         });
//     }
// });
//
// app.put("/tacos/:id", (req, res) => {
//     let newTaco = req.body;
//     tacos = tacos.map(taco => {
//         if (taco._id === req.params.id) {
//             return (newTaco = Object.assign(taco, newTaco));
//         } else {
//             return taco;
//         }
//     });
//     res.send(newTaco);
// });
//
// app.get("/tacos/:id", (req, res) => {
//     //find obj w matching id, res.send obj
//     let taco = tacos.find(taco => {
//         return taco._id === req.params.id;
//     });
//     res.send(taco);
// });
