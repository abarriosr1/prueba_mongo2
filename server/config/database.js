const mongoose = require('mongoose');

const DB_URL = process.env.MONGO_URL;

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((error) => {
    console.error('DB Connection Error!:', error);
  });

module.exports = mongoose.connection;
