# Book Search Engine Starter Code


## Your Task

Your assignment this week is emblematic of the fact that most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

This week, you’ll take starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end. 

To complete the assignment, you’ll need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas. Use the [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) walkthrough for instructions.


## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Table of Contents
- [Introduction](#introduction)
- [Challenge Overview](#challenge-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Refactoring Steps](#refactoring-steps)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

## Introduction
In this project, we have a fully functioning Google Books API search engine built with a RESTful API using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to search for books and save their searches to the backend. However, we aim to enhance the application's performance and flexibility by refactoring it to use a GraphQL API built with Apollo Server.

## Challenge Overview
The main challenge is to refactor the existing RESTful API to a GraphQL API using Apollo Server. We'll modify the server to utilize GraphQL queries and mutations for fetching and modifying data. Additionally, we need to adapt the authentication middleware to work within the context of a GraphQL API.

## Technologies Used
The project is built using the following technologies:
- MongoDB: For storing book search data.
- Express.js: As the server framework to handle API requests.
- React: For building the user interface and front-end components.
- Node.js: As the server environment.
- Apollo Server: To set up the GraphQL API.
- Apollo Client: To communicate with the Apollo Server from the React front-end.

## Setup Instructions
To run the application, follow these steps:

1. Clone the repository and navigate to the project folder.
2. Install the required dependencies for both the server and client using `npm install`.
3. Set up the MongoDB database and update the connection string in the server configuration.
4. Start the development server: `npm run develop`.

## Refactoring Steps
1. Set up an Apollo Server: Replace the existing RESTful API with Apollo Server to handle GraphQL queries and mutations.

2. Modify Authentication Middleware: Adapt the authentication middleware to work with the new GraphQL API. You may need to extract authentication details from the GraphQL context.

3. Create an Apollo Provider: In the React front-end, establish an Apollo Client and wrap the application with an Apollo Provider so that it can communicate with the Apollo Server.

## Deployment
Once the refactoring is complete and the application is thoroughly tested, proceed with the deployment process:

1. Deploy the MongoDB database to a cloud service (e.g., MongoDB Atlas).

2. Deploy the server and front-end to a cloud hosting platform (e.g., Heroku, Netlify).

3. Configure environment variables for sensitive information, such as database connection string and authentication keys.

4. Test the deployed application to ensure it works as expected.

## Conclusion
By refactoring the Google Books API search engine to use a GraphQL API with Apollo Server, we have improved the application's performance and responsiveness. The use of GraphQL allows for more efficient data fetching, and Apollo provides a seamless connection between the front-end and server. With the application deployed to a cloud platform, users can now access the search engine from anywhere and enjoy personalized book searches.
