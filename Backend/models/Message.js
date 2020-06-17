const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
  },

  messageSender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  messageReceiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  giftCardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GiftCard',
  }
}, {timestamps: true})

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message
