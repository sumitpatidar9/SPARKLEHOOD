

import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI not found in environment variables');
  }
  
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected');
};

export default connectDB;
