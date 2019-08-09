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


### User Authentication
User Authentication is secured by incorporating `BCrypt`creating a password-digest, to ensure no users actual password is stored in the database. Session tokens are created at login and destroyed at logout, to store a user's current session as a client-side cookie in the browser. 

User Signup & Login components render an animated display of images. A user is able to login, create an account, or use a demo login account to explore the application.
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/RKGQBDQl2umYMU5n6Y/giphy.gif"/>
</p>


### Image Uploading
Barkstagram features Amazon Web Services to host uploaded images. Users are able to post pictures from the profile. When a file is selected, a preview of the image is shown prior to upload. 

&nbsp;<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-   Amazon_Web_Services_Logo.svg.png"/>
  
  <img src="/app/assets/images/sample_add_post.png"/>
</p>

### Like, Comment, & View Images
Users are able to view individual photo's from their feed or profile. Barkstagram incorporates modal components to show an image once clicked. 

Users are able to like and comment on photos from both the image modal and the image feed, rending posts from other accounts in which the current user is following. 
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/S8NXreMBFMQFVdiUED/giphy.gif"/>
</p>

### User Search

&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/htw2RPnowdGUAO6hTR/giphy.gif"/>
</p>

### Image Modal Components





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