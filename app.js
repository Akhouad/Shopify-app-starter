const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser')

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DB = process.env.DB
mongoose.connect('mongodb://localhost:27017/'+DB, {useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  withCredentials: false,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Content-Type-Options', 'X-Frame-Options', 'Accept', 'Origin']
}));

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
});

const shopifyRoutes = require('./routes/shopify')
const mailchimpRoutes = require('./routes/mailchimp')
app.use('/shopify', shopifyRoutes)
app.use('/mailchimp', mailchimpRoutes)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});