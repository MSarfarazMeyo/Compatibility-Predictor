# Compatibility Predictor

This is a MERN application that allows users to manage a list of applicants and generate compatibility scores for them. The application takes an input of an array of applicants and an array of team members and produces an output of an array of applicants with their respective compatibility score. I have build this application using the MERN stack that provide a solid foundation for building a scalable and efficient application.

## Frontend Part

I have used React to build the frontend of this application. I have created one home page and components for displaying the applicant and team member data, as well as a form for adding new applicants. and used Axios,  to make API requests to the backend and retrieve the compatibility scores for each applicant.

## Backend Part

I have used Node.js and Express to build the backend API for the application. and define routes for handling incoming requests, such as adding a new  list of applicants and team members.

## Database Part

 MongoDB database to store the applicant and team member data. I used Mongoose, a MongoDB object modeling tool, to define the schema for the data and interact with the database from Node.js.

## Compatibility score algorithm:

I have created a function nemed : calculateScore to generate compatibility scores for each applicant based on their relevant factors.


### Instruction To run this Application

1. Clone the repository to your local machine.
2. Install the dependencies for both the client and server.
3. add .env file to server folder and add DBURI=mongodb+srv://admi.....  , and  PORT=5000
4. Start the server: npm run start
6. Start the client:npm start


### Usage
To use the application, open a web browser and navigate to http://localhost:3000. You should see a  form for adding new applicants and new team. To generate compatibility scores, you'll need to click the check compatibility button that implement the function for calculating scores based on your specific requirements.


