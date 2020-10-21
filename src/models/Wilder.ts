import mongoose from 'mongoose';

const { Schema } = mongoose;
const WilderSchema = new Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});

export default mongoose.model('wilder', WilderSchema);
