import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDb: OK!");
  } catch (e) {
    console.log("Error connecting to MongoDB: \n" + e.message);
  }
};

export default dbConnection;
