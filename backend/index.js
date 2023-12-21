const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');

const tokenizer = require('./controller/midtransTokenizer.js');

app.use(cors());

// accept json and url encoded values
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/checkout', async (req, res) => {
    const result = await tokenizer();
    const token = result.token;
    console.log("transaction token: ", token);
    res.json({ token: token });
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});