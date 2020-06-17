const mongoose = require('mongoose')

const GiftCardSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: [true, 'Store name is required']
  },
  cardValue: {
    type: Number,
    required: [true, 'Card value is required']
  },
  cardNumber: {
    type: Number,
    required: [true, 'Gift card number is required'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  message: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
  isLiked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LikedGiftCard',
  },
}, {timestamps: true})

const GiftCard = mongoose.model('GiftCard', GiftCardSchema)
module.exports = GiftCard

// Shift Parent model to GiftCard. Display giftcard.message.username for message sender. Don't have to display message recepient 
/*const message = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    db.Message.find({messageReceiver: foundUser._id}).populate(['messageSender', 'messageReceiver', 'giftCardId']).exec((err, foundMessages) => {

      if(err) return res.json({
        message: err
      })

      console.log(foundMessages)

      let messageSender = foundMessages.map((message, index) => {
        return [message.messageSender.firstName, message.messageSender.email, message.giftCardId._id,  [message.message]]
      })

      console.log(messageSender)
  
      res.status(200).json({
        messageSender: messageSender,
      })
    })
  })
}*/