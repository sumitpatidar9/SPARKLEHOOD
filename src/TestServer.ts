import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Incident from './Models/Incident';

dotenv.config();

const seedIncidents = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');

    await Incident.deleteMany(); // Clear existing data (optional)
    console.log('Old incidents removed');

    const now = new Date(); // Current timestamp

    const sampleIncidents = [
      {
        title: 'GPT-generated misinformation',
        description: 'The model generated false information about a public health policy.',
        severity: 'High',
        reported_at: now
      },
      {
        title: 'Image classification bias',
        description: 'Model consistently mislabels people of color in surveillance images.',
        severity: 'Medium',
        reported_at: now
      },
      {
        title: 'Chatbot hallucination',
        description: 'Chatbot responded with entirely fabricated legal advice.',
        severity: 'Low',
        reported_at: now
      }
    ];

    const result = await Incident.insertMany(sampleIncidents);
    console.log(`Inserted ${result.length} sample incidents`);

    mongoose.disconnect();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};


seedIncidents();
