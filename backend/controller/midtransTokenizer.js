require('dotenv').config();
const axios = require('axios');
const url = "https://app.sandbox.midtrans.com/snap/v1/transactions"

async function tokenizer(price) {
    const randomOrderId = Math.floor(Math.random() * 1000);
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
                    order_id: "ORDER-" + randomOrderId,
                    gross_amount: price
                }
            }
        });
        return response.data
    } catch (error) {
        console.error(error);
    }
}

module.exports = tokenizer;