import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemRoutes from './routes/items.route.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vanuj616:vyas123@cluster1.xy02f.mongodb.net/nextdb');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the process with failure
  }
};

// Connect to the database
connectDB();

// Routes
app.use('/api/items', itemRoutes); // Register the item routes

// Default route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://vanuj616:vyas123@cluster1.xy02f.mongodb.net/nextdb');
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB', error);
//     process.exit(1); // Exit the process with failure
//   }
// };

// // Connect to the database
// connectDB();

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


