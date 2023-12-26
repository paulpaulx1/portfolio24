const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 50, // Amount in cents (e.g., $10.00)
        currency: 'usd',
      });
  
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
        console.log(error)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error creating payment intent' }),
      };
    }
  };