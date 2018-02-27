let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');

//import routes
const legoRouter = require('./routes/legos');
const authRouter = require('./routes/auth');

//connect to db
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/user-auth',
  { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
  err => {
    if (err) throw err;
    console.log("Don't droppa da base");
  }
);

//base express app
const app = express();

//setup cors
app.use(cors());

//setup JSON requests
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup logging
app.use(morgan('dev'));

//setup routes
app.use('/legos', legoRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[+] Kreacher has been watching port ${PORT}`);
});
