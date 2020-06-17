const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  readyToSwap: {
    type: Boolean
  },
  giftCard: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GiftCard',
  }],
  message: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
  giftCardIsLiked: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LikedGiftCard',
  }]
}, {timestamps: true});

const User = mongoose.model('User', UserSchema)
module.exports = User