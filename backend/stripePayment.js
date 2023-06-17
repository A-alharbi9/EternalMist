require('dotenv').config();
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const frontendURL =
  express().get('env') === 'development'
    ? `http://localhost:${process.env.FRONTEND_PORT}`
    : process.env.PROD_FRONTEND_URL;

const stripeRouter = router.post('/', async (req, res) => {
  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Eternal Mist Perfume',
              images: [
                'https://cdn.sanity.io/images/vpz0rx22/production/6b833304ebed74caee6c37ff453f83be588b4161-612x612.jpg?q=85',
              ],
            },
            unit_amount: 65 * 100,
            currency: 'usd',
          },
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 2,
          },
        },
      ],
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${frontendURL}?success=true`,
      cancel_url: `${frontendURL}?canceled=true`,
    });

    res.redirect(303, checkoutSession.url);
  } catch (error) {
    res.status(500).end();
  }
});

module.exports = { stripeRouter };
