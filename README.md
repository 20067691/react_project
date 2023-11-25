# Assignment 1 - ReactJS app.

Name: Dean Sinnott 

## Overview.

Movie Fan app, everything you need to know about movies. This app has extensive linking between pages showing movie lists, upcoming, people involved in production, favourites and watchlist. Using React javascript libraries, running in a Node.js environment. The TMDB API provides sample data to display the apps functionality.  


### Features.
 __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Vote avgerage sort - added a new sorting method for movies in the filter movies card. User may sort from high to low and low to high.
+ In theatres movie - a random movie is displayed on the top of the home page that is currently in theatres.
+ Paginanation - the app can now  transverse and display  multipel pages of an api call.
+ Auto scroll to top button - scolls to the top of the current displayed page when clicked. 
+ Dark mode - user has the chose of a light theme and dark them for the app. Controlled from a switch at the top of the page. 
+ Movie watchlist page - User can now add they wish to watch from the upcoming movies page. 



## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]
+ Install npm.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).