const db = require('../models')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    console.log('In Register Route')
    // check if the user already exists
    const existingUser = await db.User.findOne( { email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        status: 400,
        message: "A user with that email already exists."
      })
    }
    // TODO: check validity of data being sent
    // password is unique
    // check that the 2 passwords match
    if (req.body.password !== req.body.password2) {
      return res.status(400).json({
        status: 400,
        message: "Passwords don't match"
      })
    }

    // create a new user
    // generate salt (adds complication to password hash)
    const salt = bcrypt.genSaltSync(10);
    // hash password
    const hash = bcrypt.hashSync(req.body.password, salt);
    // create user object
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash
    };

    // save user to database
    const newUser = await db.User.create(userData);
    // send some confirmation message as JSON
    return res.status(200).json({ 
      status: 200,
      message: "User registered",
      userData: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: err
    })

  }
}

const login = (req, res) => {
  // console.log(req.body);
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ status: 400, message: 'Please enter your email and password' });
  }

  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    if (!foundUser) {
      return res.status(400).json({ status: 400, message: 'Email or password is incorrect'});
    }

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

      if (isMatch) {
        req.session.currentUser = { id: foundUser._id };
        return res.status(200).json({ status: 200, message: 'Success', data: foundUser._id });
      } else {
        return res.status(400).json({ status: 400, message: 'Email or password is incorrect' });
      }
    });
  });
}

const verify = (req, res) => {
  if (!req.session.currentUser) return res.status(401).json({
    message: 'Unauthorized!'
  })
  res.status(200).json({
    message: `Current user verified with ID ${ req.session.currentUser.id }`
  })
}

const logout = (req, res) => {
  if (!req.session.currentUser) return res.status(401).json({
    message: 'No user to log out!'
  })
  req.session.destroy(err => {
    if (err) return res.status(500).json({
      message: 'Something went wrong. Please try again.'
    })
    res.sendStatus(200)
  })
}

module.exports = {
  register,
  login,
  verify,
  logout
}