require('dotenv').config();
const axios = require('axios');
const url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
const url_payment_link = "https://api.sandbox.midtrans.com/v1/payment-links";

async function tokenizer(price) {
    const randomOrderId = Math.floor(Math.random() * 1000);
    let data = {
        transaction_details: {
            order_id: "ORDER-" + randomOrderId,
            gross_amount: price
        }
    };
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
            data: data
        });
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function paymentLink(price) {
    const randomOrderId = Math.floor(Math.random() * 1000);
    let data = {
        transaction_details: {
            order_id: "ORDER-" + randomOrderId,
            gross_amount: price
        }
    };

    try {
        const response = await axios({
            url: url_payment_link,
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:
                    "Basic " +
                    Buffer.from(process.env.SERVER_KEY_SECRET).toString("base64")
            },
            data: data
        });
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { tokenizer, paymentLink };