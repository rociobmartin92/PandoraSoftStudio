/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import "dotenv/config";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configura el transporte del correo
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// Define la función que se activa al hacer una solicitud HTTP
exports.sendEmail = functions.https.onRequest((req, res) => {
  // Extrae los datos del formulario desde la solicitud
  const { name, email, message } = req.body;

  // Configura el contenido del correo
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to: "destinatario@example.com", // Coloca la dirección de correo a la que deseas enviar los datos
    subject: "Nuevo formulario de contacto",
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send("Correo enviado con éxito");
  });
});
