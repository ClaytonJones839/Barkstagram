# Barkstagram

[Barkstagram](https://barkstagram-cjones.herokuapp.com/#/login) is a social networking application inspired by [Instagram](https://instagram.com).
Barkstagram focuses on image-sharing, and allows users to interact with with other members. Image hosting for this application utilizes Amazon Web Services. The backend of Barkstagram is constructed using Ruby on Rails and PostgresSQL, while the frontend incorporates React and Redux.

<p align="center">
  <img src="/app/assets/images/profile_demo.png">
</p>


## Features 
- User Authentication
- Image Uploading
- Like/Comment & View Images
- User Profile
- User Search


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

### User Profile 
A user who has created an account on Barkstagram, has their own profile page. From this page, they are able to see details about their profile including how many accounts they are following as well as how many users follow them. 

Images on a users profile have an overlay, that when hovered over, display statistics about that particular image.

&nbsp;<p align="center">
   <img width="600" src="https://media.giphy.com/media/McsXmdX6g9SJ4EpjLJ/giphy.gif"/>
 </p>
  

### User Search
While activley logged in, a user is display a navagation bar with a fixed position at the top of their browser window. From the nav bar, users are able to:

- Navigate to a feed, displaying images of users they follow (left-camera)
- Search for other users on Barkstagram, and visit another user's profile (middle)
- Navigate to an explore-feed, displaying posts from public users, including those they do not currently follow (right-compass)
- Navigate to their own personal profile (right dog)
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/htw2RPnowdGUAO6hTR/giphy.gif"/>
</p>


