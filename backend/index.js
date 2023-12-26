const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');

const { tokenizer, paymentLink } = require('./controller/midtransTokenizer.js');

app.use(cors());

// accept json and url encoded values
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/checkout', async (req, res) => {
    const price = req.body.price;
    const result = await tokenizer(price);
    const token = result.token;
    console.log("transaction token: ", token);
    res.json({ token: token });
})

app.post('/api/v1/payment-links', async (req, res) => {
    const price = req.body.price;
    const result = await paymentLink(price);
    const payment_url = result.payment_url;
    console.log("transaction token: ", payment_url);
    res.json({ payment_url: payment_url });
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});