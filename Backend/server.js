// imports
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const port = process.env.PORT || 3000
const app = express()
require('dotenv').config();

// middleware - JSON parsing
app.use(express.json())

// middleware - cors
const corsOptions = {
    origin: [ 'http://localhost:3000', 'https://serene-waters-63279.herokuapp.com' ],
    credentials: true, // allows our session cookie to be sent back and forth from server to client (vice versa)
    optionsSuccessStatus: 200 // Some older browsers choke on default 204 code 
}
app.use(cors(corsOptions))


app.use(bodyParser.urlencoded({ extended: false }));
// middleware - session config
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/swap';
app.use(session({
  // store the session in our DB
  store: new MongoStore({ url: connectionString}),
  secret: (process.env.SESSION_SECRET || 'finalprojectkey'),
  resave: false,
  // Only create a session if a property is added to the session
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))


app.use('/api/v1/users', routes.users)
app.use('/api/v1/auth', routes.auth)
app.use('/api/v1/giftcards', routes.giftcard)
app.use('/api/v1/message', routes.message)
app.use('/api/v1/giftcards/like', routes.newlike)

app.get('/', (req, res) => {
  res.send('Hello, world');
})


// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))