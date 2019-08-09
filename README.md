# Barkstagram

[Barkstagram](https://barkstagram-cjones.herokuapp.com/#/login) is a social networking application inspired by [Instagram](https://instagram.com).
Barkstagram focuses on image-sharing, and allows users to interact with with other members. Image hosting for this application utilizes Amazon Web Services. The backend of Barkstagram is constructed using Ruby on Rails and PostgresSQL, while the frontend incorporates React and Redux.

<p align="center">
  <img src="/app/assets/images/profile_demo.png">
</p>


## Features 
- User Authentication
- Image Uploading
- Like/Comment on Images
- User Search
- Image Modal Components


#### User Authentication
User Authentication is secured by incorporating `BCrypt`creating a password-digest, to ensure no users actual password is stored in the database. Session tokens are created at login and destroyed at logout, to store a user's current session as a client-side cookie in the browser. 

User Signup & Login components render an animated display of images. A user is able to login, create an account, or use a demo login account to explore the application.
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/RKGQBDQl2umYMU5n6Y/giphy.gif"/>
</p>



#### Image Uploading

#### Like/Comment on Images

#### User Search
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/htw2RPnowdGUAO6hTR/giphy.gif"/>
</p>

#### Image Modal Components





Things you may want to cover:


* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



Things you may want to cover:


* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
