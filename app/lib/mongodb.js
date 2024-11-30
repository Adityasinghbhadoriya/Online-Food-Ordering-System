import mongoose from "mongoose";

// MongoDB connection logic
const connectMongo = async () => {
  // Check if already connected
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongo;
