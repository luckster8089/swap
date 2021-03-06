# Swap
### Overview

Received a gift card from grandma that you will never use? Look no further cause Swap is here to help you trade in that gift card for something you will use. Swap turns your gift card into currency.  Some people trade their gift cards for cash, some trade theirs in for gold. It's as simple as signing up and finding someone to swap with!

### Technologies Used

Backend <br/>
    - MongoDb
    - Express
    - Node

Frontend <br/>
    -React
    Framework
        -Material-UI

### Installation

To use Swap, clone it down and install dependencies from NPM with npm using the command:

npm install

Then change directory into Swap-auth-API and using npm, type the command 

npm start

Your backend should be up and running. Now go back up a directory and change into Swap-auth-client. Using npm, type the command

npm start

Swap should be running on localhost:3000

### User Story
User will be able to create a free account 

User will be able to add a new gift card

User will be able to send a like to a gift card

User will receive an email from the gift card owner, if the owner is interested in Swapping

If both agrees, Swap will verify the gift card (May take up to 24 hours) and send the gift card electronically to new owner

# Wireframe

Entity Relationship Diagram
![ERD](public/ERD.png)

Landing Page
![Landing](public/LandingPage.png)

Register Page
![Register](public/UserSignUp.png)

Login Page
![Login](public/UserLogInPage.png)

Profile Page
![Profile](public/UserProfilePage.png)

Listing Page
![Listing](public/UserListingPage.png)

Add New Gift Card Page
![NewGiftCard](public/User AddNewGiftCardPage.png)

User Messages Page
![Message](public/UserMessagesPage.png)



### Future Features

Personal Messaging
<br/>
Automated GiftCard Validator
