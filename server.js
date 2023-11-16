import express from "express";
import { createTransport } from "nodemailer";
import { urlencoded, json } from "body-parser";

const app = express();
const PORT = 3001;

app.use(urlencoded({ extended: true }));
app.use(json());

app.post("/send-email", (req, res) => {
  const { name, email, description, project, country, city, state } = req.body;

  // Configura el transporte del correo
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.USER,
      pass: import.meta.env.PASS,
    },
  });

  // Configura el contenido del correo
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to: "martinrocio.1992@gmail.com",
    subject: "Nuevo formulario de contacto",
    html: `
      <p>Nombre y apellido: ${name}</p>
      <p>Email: ${email}</p>
      <p>Tipo de emprendimiento: ${description}</p>
      <p>Interesado en: ${project}</p>
      <p>País: ${country}</p>
      <p>Ciudad: ${city}</p>
      <p>Provincia/Estado: ${state}</p>
    `,
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Correo enviado: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
