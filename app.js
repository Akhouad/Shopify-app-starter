const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
var cors = require('cors');

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
app.use('/shopify', shopifyRoutes)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});