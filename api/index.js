const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const ordersRoute = require('./routes/orders');



const app = express();
dotenv.config();


const allowlist = ["http://localhost:3000", "http://localhost:3001", "https://boboshop.onrender.com", "https://boboshop-admin.onrender.com"];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB Connection Successfull!');
    })
    .catch((err) => {
        console.log(err);
    });



app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/orders', ordersRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running!');
});
