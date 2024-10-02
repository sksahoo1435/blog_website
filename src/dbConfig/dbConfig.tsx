import mongoose from "mongoose";

export async function connect() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined");
    }

    // Await the mongoose connection
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('Database connected successfully');
    });

    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); 
    });

  } catch (error) {
    console.error("Something went wrong while connecting to the database:", error);
    process.exit(1);  
  }
}
