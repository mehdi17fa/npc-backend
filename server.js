const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const devisRoutes = require('./routes/devisRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', devisRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Lancer le serveur uniquement après la connexion MongoDB
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err.message));
