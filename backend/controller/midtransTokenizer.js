require('dotenv').config();
const axios = require('axios');
const url = "https://app.sandbox.midtrans.com/snap/v1/transactions"

async function tokenizer() {
    try {
        const response = await axios({
            url: url,
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:
                    "Basic " +
                    Buffer.from(process.env.SERVER_KEY_SECRET).toString("base64")
            },
            data: {
                transaction_details: {
                    order_id: "ORDER-101",
                    gross_amount: 200000
                }
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = tokenizer;