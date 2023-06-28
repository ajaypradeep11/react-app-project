/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const admin = require('firebase-admin')
admin.initializeApp()

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
    // Stripe init
    const stripe = require("stripe")('sk_test_51NLfCWHaVQ7a8uC8yosWfJgS0fqgoDbMfWH55Ftp3WxpPgXTsaYPUWPeDDv04RioNzawctKshtOg6a5l45Lba42Q00t8uhmelG');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:5500/success",
      cancel_url: "http://localhost:5500/cancel",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: (100) * 1, // 10000 = 100 USD
            product_data: {
              name: "Bulk Service Files",
            },
          },
        },
      ],
    });
  
    return {
      id: session.id,
    };
  });
  

exports.events = functions.https.onRequest(async (req, res) => {

    const stripe = require("stripe")('sk_test_51NLfCWHaVQ7a8uC8yosWfJgS0fqgoDbMfWH55Ftp3WxpPgXTsaYPUWPeDDv04RioNzawctKshtOg6a5l45Lba42Q00t8uhmelG');
    let event;
  
    try {
      const whSec = 'whsec_Qn58H3qK61G33UfcHW1ZsGvXrCaIB1yu';
  
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.headers["stripe-signature"],
          whSec,
      );
      
    } catch (err) {
      console.error("Signature Failed.");
      return res.sendStatus(400);
    }

    const dataObject = event.data.object;

    await admin.firestore().collection("orders").doc().set({
      id: "myifff",
    });
  
    return res.sendStatus(200);



}); 