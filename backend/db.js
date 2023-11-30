const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/iNotebook';


// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('connected to mongo');
//   } catch (error) {
//     console.error(error);
//   }
// };

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("connected")).catch((e)=>{console.log(e)})
}

module.exports = connectToMongo;
