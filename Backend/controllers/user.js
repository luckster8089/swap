const db = require('../models')


const create = (req, res) => {
  db.User.create(req.body, (err, savedUser) => {
    if (err) console.log('Error in creating new user:', err)

    res.status(200).json({ user: savedUser })
  })
}

const show = (req, res) => {
  db.User.findById(req.params.id).populate(['giftCard', 'message']).exec((err, foundUser) => {
    console.log(foundUser)
    if(err) return res.json({
      message: err
    })

    res.status(200).json({
      user: foundUser
  })
})
}

  const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    db.GiftCard.deleteMany({user: req.params.id}, (err, deletedGiftcards) => {

    if(err) return res.json({
      message: err
    })

    res.status(200).json({
      user: foundUser
    })
  })
})
}


const message = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    db.GiftCard.find({user: foundUser._id}).populate('message').exec((err, foundMessages) => {

      if(err) return res.json({
        message: err
      })

      console.log(foundMessages)
  
      res.status(200).json({
        messageSender: foundMessages,
      })
    })
  })
}




module.exports = {
  show,
  create,
  message,
  destroy
}
