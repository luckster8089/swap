const db = require('../models')

const create = (req, res) => {
    db.Message.create(req.body, (err, savedMessage) => {
        console.log(req.body)
        db.GiftCard.findById(req.body.giftCardId, (err, foundGiftCard) => {
            foundGiftCard.message.push(savedMessage)
            foundGiftCard.save()
        })
        db.User.findOne({giftCard: req.body.giftCardId}, (err, foundUser) => {
            foundUser.message.push(savedMessage)
            foundUser.save()
            savedMessage.messageReceiver.push(foundUser._id)
            savedMessage.save()

        })
        res.status(200).json({ message: savedMessage })
    })
}

const index = (req, res) =>  {
    db.Message.find({}, (err, foundMessages) => {
        if (err) console.log('Error in message#index:', err)

        if(!foundMessages) return res.json({
            message: 'No MEssage found in database.'
        })

        res.status(200).json({ messages: foundMessages });
    })
}


module.exports = {
    create,
    index
}