import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userName: String,
  claimedPoints: Number,
  claimedAt: { type: Date, default: Date.now }
});

export default mongoose.model('ClaimHistory', claimSchema);
