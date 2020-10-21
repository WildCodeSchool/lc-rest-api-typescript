import express, { Request, Response } from 'express';

import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import cors from 'cors';

import wilderController from './controllers/wilder';

const app = express();

// Database
mongoose
  .connect('mongodb://127.0.0.1:27017/wilderdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
    autoIndex: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to database'))
  // eslint-disable-next-line no-console
  .catch((err: Error) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/wilders', asyncHandler(wilderController.create));
app.get('/api/wilders', asyncHandler(wilderController.read));
app.put('/api/wilders', asyncHandler(wilderController.update));
app.delete('/api/wilders', asyncHandler(wilderController.delete));

app.get('*', (req, res) => {
  res.status(404);
  res.send({ success: false, message: 'Wrong adress' });
});

// TODO Using error:any for now, we'll investigate later
app.use((error, req: Request, res: Response) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    res.status(400);
    res.json({ success: false, message: 'The name is already used' });
  }
});

// Start Server
// eslint-disable-next-line no-console
app.listen(5000, () => console.log('Server started on 5000'));
