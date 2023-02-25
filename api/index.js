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

const corsOptions = {
    origin: [
        "https://bbshop.netlify.app",
        "http://localhost:3001",
        "http://localhost:3001",
        "https://boboshop.onrender.com",
        "https://boboshop-admin.onrender.com",
    ],
}

app.use(cors(corsOptions));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB Connection Successfull!');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use('/v1/auth', authRoute);
app.use('/v1/users', userRoute);
app.use('/v1/products', productRoute);
app.use('/v1/cart', cartRoute);
app.use('/v1/orders', ordersRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running!');
});
