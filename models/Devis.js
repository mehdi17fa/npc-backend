const mongoose = require('mongoose');

const devisSchema = new mongoose.Schema({
  name: String,
  prenom: String, // 
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Devis', devisSchema);
