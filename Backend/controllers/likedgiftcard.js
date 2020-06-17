const db = require('../models')

const create = (req, res) => {
    db.LikedGiftCard.create(req.body, (err, savedLiked) => {
        console.log(savedLiked)
        db.User.findById(req.body.messageSender, (err, foundUser) => {
            console.log(foundUser)
            foundUser.giftCardIsLiked.push(savedLiked._id)
            foundUser.save()
    
        
            db.GiftCard.findById(req.body.currentGiftCard, (err, foundGiftCard) => {
                foundGiftCard.isLiked = savedLiked._id
                foundGiftCard.save()
            })
            if(err) console.log('ERror in likegc create', err)
            res.status(200).json({ likedGiftCard: savedLiked})
    })
    })
}

module.exports = {
    create,
}