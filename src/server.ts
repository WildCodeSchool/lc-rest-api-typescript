import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import wilderController from './controllers/wilder';

const app = express();

// Database
mongoose
  .connect('mongodb://127.0.0.1:27017/wilderdb', {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database')) // eslint-disable-line no-console
  .catch((err) => console.log(err)); // eslint-disable-line no-console

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/wilders', wilderController.create);
app.get('/api/wilders', wilderController.read);
app.put('/api/wilders', wilderController.update);
app.delete('/api/wilders', wilderController.delete);

// Start Server
app.listen(5000, () => console.log('Server started on 5000')); // eslint-disable-line no-console
