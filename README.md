# Assignment 1 - ReactJS app.

Name: Dean Sinnott 

## Overview.

Movie Fan app, everything you need to know about movies. This app has extensive linking between pages showing movie lists, upcoming, people involved in production, favourites and watchlist. Using React javascript libraries, running in a Node.js environment. The TMDB API provides sample data to display the apps functionality.  


### Features.
 __new features__ 
 
+ Vote avgerage sort - added a new sorting method for movies in the filter movies card. User may sort from high to low and low to high.
+ In theatres movie - a random movie is displayed on the top of the home page that is currently in theatres.
+ Paginanation - the app can now  transverse and display  multiple pages of an api call.
+ Auto scroll to top button - scolls to the top of the current displayed page when clicked. 
+ Dark mode - user has the chose of a light theme and dark them for the app. Controlled from a labled switch at the top of the page. 
+ Movie watchlist page - User can now add a movie they wish to watch from the upcoming movies page. 
+ Movie details page (modified) - this page now displays movie informaion, first 20 cast members and watch providers for the movie. 
+ Popular people page - list of people innvolved in movies ordered by highest popularity rating. 
+ Actor movie card - used to diplay people information on the popular people page. It shows their name, popularity rating and the movie they are best  known for. 
+ Actor details page - shows a profile picture, actor name, their occupation, brief biography and a list of movies they are in. These movies can be sorted using the exisiting filter movie card and links to its movie details page. 
+ Top rated movie page - shows a list of the top rated movies. 



## Setup requirements.

+ Install npm.
+ Create .env file containg a valid api key.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Top rated movies - movie/top_rated
+ List of popular people - /person/popular
+ Actor details - person/:id
+ Movie credits - (actor details)&append_to_response=movie_credits
+ Watch providers for a movie - movie/:id/watch/providers
+ Now playing in theatres - movie/now_playing



## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/rated - list of top rated movies.
+ /peron/:id - details of an actor. 
+ /movies/actors - list of popular people involved in movies.
+ /movies/watchlist - movies added from upcoming list by user. 


## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
+ Pagination 
+ Dark mode 
+ null safe operator