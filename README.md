This is a project with a focus on backend technologies, building an auction platform where users can sell and bid for items.

Uses postman for client side testing.

Note - reach out for envs :thumb: 


### Technologies used:
* Node
* Express
* MongoDB
* Typescript
* JOI
* JWT
* BCRYPTJS
* Postman


### Endpoints

#### /auth

Handles authentication and reaches out to mongodb database to store/retrieve user information where applicable. 

- Implementation - src/routes/auth

#### auth/login:

This endpoint accepts post requests and expects to receive the following in the request body: 
* email
* password

If an email exists for that specific user in the db records and the incoming request data passes validation, then the password received in the request body is matched against the hashed password for that user from the mongodb database.

If that goes well, then the user receives a signed JWT Token which they will provide in each request header so they are recognised and granted access to use the platform (for example, selling an item, bidding for an item, or even browsing).

#### auth/signup

This endpoint accepts post requests and expects to receive the following in the request body:
* fullname
* username
* email
* password

If user exists, server sends back a response notifying that an account already exists.

After successful form validation, the password is hashed using bcryptjs, a user is created using mongoose create method provided by our user model. 
The data provided should match fields specified in the user model schema, with the exception that date is not provided by user, because this is being handled programatically each time a new user is created (defined in the schema).

For extra security, decision was made to force user to log in so that they can receive a jwt token and explore the platform further.


#### /api

All incoming requests to api endpoints go through a middleware verifying jwt token, which users who are authenticated should provide in the request header. When verified the handlers then continue dealing with the incoming request accordingly granting users access and authorisation to do things.

- Implementation - src/routes/items


#### api/items

- A simple get request allowing users to see items posted on the platform.

#### api/sell-item

Accepts post requests and expects to receive the following in the request body

* item
* description
* condition
* auction_ends

If all details are provided the item is then placed in the auction using the create methods provided by mongoose's ItemModel and and auctionModel.
The Item and auction schemas will also ensure to populate data specifics not provided by user. For example:

- status of item being sold - by default it will be set as "Open"
- date_listed - by default it will be the present date
 

#### api/item/bid

Accepts post requests and expects to receive the following in the request body.

* item_id
* bidder_id
* bid_price

The handler for this endpoint contains logic ensuring that a user bidding for an item does not bid for their own item, to avoid unfair bid wars.

There is also logic checking if item even exists before an attempt to store bid.

Once bid is successfully placed, the auction collection is updated accordingly. The item in the auction collection should have a **bids** property, which is an array of objects, where each object contains bid information.
![](https://i.imgur.com/GgP5F6K.png)








