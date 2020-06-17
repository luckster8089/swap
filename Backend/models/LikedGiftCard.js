const mongoose = require('mongoose')

const LikeGiftCardSchema = new mongoose.Schema ({
    giftCardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GiftCard',
    },
    giftCardOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    giftCardCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isLiked: {
        type: Boolean,
    },
}, {timestamps:true})

const LikedGiftCard = mongoose.model('LikedGiftCard', LikeGiftCardSchema)
module.exports = LikedGiftCard