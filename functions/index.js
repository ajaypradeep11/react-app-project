const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp()

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
    const receivedData = data; // Access the received data
    const stripe = require("stripe")('sk_test_51NLfCWHaVQ7a8uC8yosWfJgS0fqgoDbMfWH55Ftp3WxpPgXTsaYPUWPeDDv04RioNzawctKshtOg6a5l45Lba42Q00t8uhmelG');
    console.log("wasssup ", receivedData);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://reactapp-c3dad.web.app/#/purchase",
      cancel_url: "https://reactapp-c3dad.web.app/#/purchase",
      
      line_items: [
        {
          quantity: receivedData,
          price_data: {
            currency: "cad",
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
    try {
      const doc = admin.firestore().collection("user").doc("user")
      const data = await doc.get();
      const value = data.data();
      const inc = value.available_service_count + 1;
      await admin.firestore().collection("user").doc("user").set({
        available_service_count: inc,
      });
      return res.status(200).json({ data });



      // if (event.type === 'charge.succeeded') {
      //   const charge = event.data.object;
      //   const lineItems = charge.lines.data;
        
      //   const doc = admin.firestore().collection("user").doc("user")
      //   const data = await doc.get();
      //   const value = data.data();
      //   const inc = value.available_service_count + parseInt(lineItems[0].quantity);
      //   await admin.firestore().collection("user").doc("user").set({
      //     available_service_count: inc,
      //   });
      //   return res.status(200).json({ data });
      // }
    }
    catch (err) {
      console.error("Error");
      return res.sendStatus(400);
    }
}); 