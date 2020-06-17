const db = require('../models')

const create = (req, res) => {
    db.GiftCard.create(req.body, (err, savedGiftCard) => {
        db.User.findById(req.body.user, (err, foundUser) => {
            foundUser.giftCard.push(savedGiftCard)
            foundUser.save()
        })
        res.status(200).json({ giftcard: savedGiftCard})
    })
}

const index = (req, res) =>  {
    db.GiftCard.find({}, (err, foundGiftCards) => {
        if (err) console.log('Error in giftcard#index:', err)

        if(!foundGiftCards) return res.json({
            message: 'No Gift Cards found in database.'
        })

        res.status(200).json({ giftcards: foundGiftCards });
    })
}

//TODO Match user to giftcard like on gift card
const show = (req, res) => {
    db.GiftCard.findById(req.params.id).populate('message').exec((err, foundGiftCard) => {
        console.log(foundGiftCard)
        db.User.find({giftCardIsLiked: foundGiftCard.isLiked}, (err, foundInterestedUser) => {
        
        // db.User.find({giftCardIsLiked:foundGiftCard.isLiked}).populate('firstName').exec((err, foundUser) => {
        //     foundUser.forEach((value, index) => {
        //         console.log(value)
        //     })
        //     let userDetail = {
        //         firstName: '',
        //         email: '',
        //     }

        //     foundUser.map((detail, index) => {
        //         return console.log(detail)
        //     })
        // })
        db.Message.find({giftCardId: foundGiftCard._id}).populate('messageSender').exec((err, foundMessage) => {
            let messageSender = {
                firstName: '',
                email: '',
                messages: []
            }

            foundMessage.map((message, index) => {
                messageSender.messages.push(message.message)
                messageSender.firstName = message.messageSender.firstName
                messageSender.email = message.messageSender.email
            })

        if (err) console.log('Error in giftcard#show:', err)
        if (!foundGiftCard) return res.json({
            message: 'Giftcard with provided ID not found.'
        })
        res.status(200).json({ giftcard: foundGiftCard, messageSenderDetails: messageSender, interestedUser: foundInterestedUser })
    })})})
}

const update = (req, res) => {
    const options = { new: true }
    db.GiftCard.findByIdAndUpdate(req.params.id, req.body, options, (err, updatedGiftCard) => {
        if (err) console.log('Error in games#update:', err)
        if (!updatedGiftCard) return res.json({
            message: "No gift card with that ID found."
        })

        // Validations and error handling here

        res.status(200).json({ giftcard: updatedGiftCard })
    })
}



const destroy = (req, res) => {
    db.GiftCard.findByIdAndDelete(req.params.id, (err, deletedGiftCard) => {
        if (err) console.log('Error in giftcard#destroy:', err)
        if (!deletedGiftCard) return res.json({
            message: "No gift card with that ID found."
        })

        res.status(200).json({ giftcard: deletedGiftCard })
    })
}


module.exports = {
    create,
    index,
    show,
    update,
    destroy
}
