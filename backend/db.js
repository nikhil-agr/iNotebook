const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/';

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to mongo');
  } catch (error) {
    console.error(error);
  }
};


module.exports = connectToMongo;
