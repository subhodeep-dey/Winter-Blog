const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Connection Successfully");
}

module.exports = connectDatabase;