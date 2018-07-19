# README

# Project Vagabond

This is an ap for discovering new places that others and yourself have visited. As the user, you can view posts about cities from around the world based on the experiences other had there. Featuring a mobile-first design, the app allows you to keep track of what's being said cities you may find yourself in the future.

### Link to site
https://vagabond99.herokuapp.com/

### Technologies/Frameworks used:
 Reacts + Rails:
- React.js
- Rails (back-end)

Other:
- CSS and HTML
- styled-components
- React Semantic UI
- Heroku

### More About the Project
One of the main project requirements was to have 3 data models with a NoSQL database. I wanted these to all be nested and to incorporate an external API call. The data structure ended up being Gardens > Users (Gardeners) > Plants. I have full CRUD on all three models, except for update on Plants, which I will add soon. 

One of the main focuses of the project is to provide the user with a static virtual experience that allows them to read brief descriptions from other users that have visited those cities. 

Project Vagabond features 3 models with a SQL database. Two of the models, for Cities and Users, exists as their own instances connected by a third model, Posts. Posts features the content from descriptions Users submitted where the User is a traveler or inquirer looking to discover as much as they can about a city. Featuring a internal API generated from completely from user content, the City and Post models feature full CRUD.

 API calls are made using Async/Await instantiations through AJAX. In future versions, the user will be able to add photos of a city they've visited to galleries where other users can view them.

 The React portion of the app features two major components. One component displays the navigation bar, which includes links to Home page and City Index. It utilizes a React framework called Semantic UI. 

### Planning and Project Management
User Stories
https://trello.com/b/mSCasTUl/vagabonds

![Wireframes #1](https://git.generalassemb.ly/atl-wdi/project-vagabond/blob/master/wireframes.png?raw=true)
![](https://i.imgur.com/StnJdAf.jpg?2)
![](https://i.imgur.com/wDgrOic.jpg?3)

and
![ERD's](https://i.imgur.com/9kA6a2Z.jpg?4)

### Remaining goals:
- Search for a City
- Add delete and edit confirmation flash messages 
- Review functionality of all CRUD
- Add an User Administrator priveleges including the ability to remove/edit cities or any post.
- Complete Styling and spruce up splash page
- implement P2P messaging for a more direct way of sharing experiences
