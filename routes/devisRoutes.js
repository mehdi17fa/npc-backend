const express = require('express');
const router = express.Router();
const Devis = require('../models/Devis');
const sendEmail = require('../utils/sendEmail');

router.post('/devis', async (req, res) => {
  const { name, prenom, email, phone, service, message } = req.body;
  const newDevis = new Devis({ name, prenom, email, phone, service, message });

  try {
    const savedDevis = await newDevis.save();

    // send email
    await sendEmail(savedDevis);

    res.status(201).json(savedDevis);
  } catch (error) {
    res.status(400).json({ message: 'Error saving devis', error });
  }
});

module.exports = router;
