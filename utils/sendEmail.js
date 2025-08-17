const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (devis) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nouveau devis de ${devis.name} ${devis.prenom}`,
      html: `
        <h2>Nouveau devis reçu</h2>
        <p><strong>Nom:</strong> ${devis.name} ${devis.prenom}</p>
        <p><strong>Email:</strong> ${devis.email}</p>
        <p><strong>Téléphone:</strong> ${devis.phone}</p>
        <p><strong>Service:</strong> ${devis.service}</p>
        <p><strong>Message:</strong> ${devis.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès !');
  } catch (err) {
    console.error('Erreur email:', err);
  }
};

module.exports = sendEmail;
