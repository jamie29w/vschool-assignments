const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

app.use(bodyParser.json());

//DO NOT actually save data like this:
let tacos = [];

app.get("/tacos", (req, res) => {
    res.send(tacos);
});

app.post("/tacos", (req, res) => {
    req.body._id = uuid();
    tacos.push(req.body);
    res.send(req.body);
});

app.delete("/tacos/:id", (req, res) => {
    let found = false;
    tacos = tacos.filter(taco => {
        if (taco._id === req.params.id) {
            found = true;
            return false;
        } else {
            return true;
        }
    });
    if (found) {
        res.send({
            message: `ITEM REMOVED SUCCESSFULLY`
        });
    } else {
        res.send({
            message: "ITEM NOT FOUND"
        });
    }
});

app.put("/tacos/:id", (req, res) => {
    let newTaco = req.body;
    tacos = tacos.map(taco => {
        if (taco._id === req.params.id) {
            return (newTaco = Object.assign(taco, newTaco));
        } else {
            return taco;
        }
    });
    res.send(newTaco);
});

app.get("/tacos/:id", (req, res) => {
    //find obj w matching id, res.send obj
    let taco = tacos.find(taco => {
        return taco._id === req.params.id;
    });
    res.send(taco);
});

app.listen(8008, () => {
    console.log(`server is running on port 8008`);
});

// [
//     {
//         "title": "Double-Stuffed Birthday Surprise",
//         "price": 3.95,
//         "_id": "0bb37b5e-cef7-4697-bd4d-bf15b54dfd8c"
//     }
// ]
