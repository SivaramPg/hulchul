import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    locationIdentifier: {
      type: String,
      required: true,
      index: true,
      sparse: true,
    },
    createdBy: { type: String, required: true, index: true, sparse: true },
  },
  { _id: true, timestamps: true }
);

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
