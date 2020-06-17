const mongoose = require('mongoose')

const SwapGiftCardSchema = new mongoose.Schema({
  ownerOfGiftCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  interestedSwapper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  giftCardOfOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GiftCard',
  },
  giftCardOfSwapper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GiftCard',
  },
  isConfirmed: {
      type: Boolean
  }
}, {timestamps: true})

const SwapGiftCard = mongoose.model('SwapGiftCard', SwapGiftCardSchema)
module.exports = SwapGiftCard