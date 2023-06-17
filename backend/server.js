const express = require('express');
const app = express();
const cors = require('cors');
const { stripeRouter } = require('./stripePayment');

app.use(
  cors({
    origin:
      app.get('env') === 'development'
        ? `http://localhost:${process.env.FRONTEND_PORT}`
        : process.env.PROD_FRONTEND_URL,
  })
);

app.use('/create-checkout-session', stripeRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

app.listen(process.env.PORT, console.log('Server listening!!'));
