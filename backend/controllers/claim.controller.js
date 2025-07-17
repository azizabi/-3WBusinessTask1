import User from '../models/user.model.js';
import ClaimHistory from '../models/claim.model.js';

export const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  const claim = new ClaimHistory({
    userId: user._id,
    userName: user.name,
    claimedPoints: points
  });

  await claim.save();

  res.json({ message: 'Points claimed', user, points });
};

export const getClaimHistory = async (req, res) => {
  const history = await ClaimHistory.find().sort({ claimedAt: -1 });
  res.json(history);
};
