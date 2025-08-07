const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const baseURL = 'https://api.razorpay.com/v1';

const auth = {
  username: process.env.RAZORPAY_KEY_ID,
  password: process.env.RAZORPAY_KEY_SECRET,
};

app.post('/create-subscription', async (req, res) => {
  try {
    const { plan_id = process.env.PLAN_ID } = req.body;

    const response = await axios.post(
      `${baseURL}/subscriptions`,
      {
        plan_id,
        total_count: 12,
        customer_notify: 1,
      },
      { auth }
    );

    res.json({ subscription: response.data });
  } catch (err) {
    console.error('Error creating subscription:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to create subscription' });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
