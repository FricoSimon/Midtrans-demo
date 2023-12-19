const express = require('express');
const app = express();
const port = 9000;

// accept json and url encoded values
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/checkout', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});