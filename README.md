# YakYik

Yak Yik is a really simple Node js implementation of a REST api of an online forum.  Technologies used were Node JS, Express JS, and Mongo DB.


## Installation
- Go into the main directory and type "npm install"

## CRUD Operations

### Getting Posts

#### GET
- https://yakyik.herokuapp.com/posts/{offset} // returns 5 posts with an offset
- https://yakyik.herokuapp.com/posts // returns all posts
- https://yakyik.herokuapp.com/posts/{id} // returns 1 post of matching id

#### POST
- https://yakyik.herokuapp.com/posts // posts a new post

#### UPDATE
- https://yakyik.herokuapp.com/posts/{id} // updates a post of matching id

#### DELETE
- https://yakyik.herokuapp.com/posts/{id} // deletes a post of matching id

### Getting Comments

#### GET
- https://yakyik.herokuapp.com/comments/{postId}/{offset} // returns 5 comments with an offset of a comment
- https://yakyik.herokuapp.com/comments/{postId} // returns all comments of a post
- https://yakyik.herokuapp.com/comments/{id} // returns 1 post of matching comment id

#### POST
- https://yakyik.herokuapp.com/comments/{postId} // posts a new comment to a post 

#### UPDATE
- https://yakyik.herokuapp.com/comments/{id} // updates a comment of matching id

#### DELETE
- https://yakyik.herokuapp.com/comments/{id} // deletes a comment of matching id


## Todo
- Implement a front-end SPI using Angular JS (or React)
- Implement email based authentication and tokenization using Passport 

