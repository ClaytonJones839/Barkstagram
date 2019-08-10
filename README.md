# [Barkstagram](https://barkstagram-cjones.herokuapp.com/#/login)

Barkstagram is a social networking application inspired by [Instagram](https://instagram.com).
Barkstagram focuses on image-sharing, and allows users to interact with other members. 

Image hosting for this application utilizes Amazon Web Services S3 cloud storage. The backend of Barkstagram uses Ruby on Rails and PostgresSQL, allowing for database queries to run effiecently utilizing RESTful API routes. The frontend incorporates React.js with a Redux framework. This enables Barkstagram to a have a state management library to optimize both logging changes to data, and persisting data throughout navagation.

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
User Authentication is secured by incorporating `BCrypt`, creating a password-digest to ensure no users actual password is stored in the database. Session tokens are created at login and destroyed at logout, to store a user's current session as a client-side cookie in the browser. 

User signup & login components render an animated display of images. A user is able to login, create an account, or use a demo login account to explore the application.
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/RKGQBDQl2umYMU5n6Y/giphy.gif"/>
</p>


### Image Uploading
Barkstagram features Amazon Web Services to host uploaded images. Users are able to post images from their profile. When a file is selected, a preview of the image is shown prior to confirming upload. 

&nbsp;<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-   Amazon_Web_Services_Logo.svg.png"/>
  
  <img src="/app/assets/images/sample_add_post.png"/>
</p>

### Like, Comment, & View Images
Users are able to view individual photo's from their feed or profile. Barkstagram incorporates modal components to show an image once clicked from either location.

Users are able to like and comment on photos from the image modal as well as the image feed, which renders posts from other member in which the current user is following. 
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/S8NXreMBFMQFVdiUED/giphy.gif"/>
</p>

### User Profile 
A user who has created an account on Barkstagram, has their own profile page. From this page, the user is able to see details about their account including how many users they are following as well as how many users follow them. 

Images on a users profile have an overlay, that when hovered over, display statistics about that particular image.

&nbsp;<p align="center">
   <img width="600" src="https://media.giphy.com/media/McsXmdX6g9SJ4EpjLJ/giphy.gif"/>
 </p>
  

### User Search
While actively logged in, a navagation bar is displayed with a fixed position at the top of their browser window. From the nav bar, users are able to:

- Navigate to a feed, displaying images of users they follow (camera icon)
- Search for other users on Barkstagram, and visit another user's profile (search bar)
- Navigate to an explore-feed, displaying posts from public users, including those they do not currently follow (compass icon)
- Navigate to their own personal profile (dog icon)
&nbsp;<p align="center">
  <img width="600" src="https://media.giphy.com/media/htw2RPnowdGUAO6hTR/giphy.gif"/>
</p>



## Future Implementations 
The following features are to be incorporated into Barkstagram.

### Video Uploading 
- Like images, users will be able to upload videos their profiles, and be able to share them with their followers.

### Optimized Database Query
- Barkstagram will look to increase efficiency and optimize loading speed with improve database queries. 

### Trending Images Feed 
- Convert current explore feed to featured image feed, displaying the most popular/recent public posts.

