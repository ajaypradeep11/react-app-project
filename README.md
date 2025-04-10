React App Project – Interview Coding Test
This project was built as part of an interview coding test. It demonstrates integration with Firebase Hosting, Stripe payments, Firestore, and Firebase Functions.

🔗 Live Demo (Firebase Hosting)
Purchase Page: https://reactapp-c3dad.web.app/#/purchase

List Page: https://reactapp-c3dad.web.app/#/list

📂 GitHub Repository
https://github.com/ajaypradeep11/react-app-project

✅ Working Functionality
Users can purchase a bulk service file.

On the Purchase screen, clicking the Buy button:

Navigates the user to Stripe Checkout.

After successful payment, the user is redirected back to the Purchase screen.

The service count is increased accordingly.

A Stripe webhook is configured with an endpoint handled by a Firebase Function.

The Firebase Function successfully communicates with Firestore to store/update purchase-related data.

🛠️ Tech Stack
React (Frontend)

Firebase Hosting

Firebase Functions

Firestore (NoSQL Database)

Stripe (Payment Processing)

Feel free to explore the project, and let me know if you have any questions!
