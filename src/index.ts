//import { testFunction } from './modules/test.js'
import express from 'express';
import bodyParse from 'body-parser';
import userRouter from './routers/userRouter.js';
//primeiro passo: definir a inferface do utilizador
//npm install express; npm install -D @types/express;


//APP CREATION
const app = express();

//REQUEST BODY CREATION
app.use(bodyParse.json());

//IMPORT USER ROUTER
app.use('/users', userRouter);

//THE DATA FORMAT
app.use(express.json()); 

//PORT NUMBER
const PORT = 7950;

//START SERVER
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})


//testFunction('index.ts');

//RestFul API 
//vantage: scalable, reliable, flexible, portable.
//level 0(plain old), level 1 (create user, get user), level 2 (appropriate HTTP verbs -> get, post, put, delete), 
//status code (states that helps front end to know the response) (200 -> everything ok(success), 300-> redirection, 400-> client error, 500 -> server error)
//create user: POST; delete user: DELETE; Get all users: GET; 
//
//data format: json, xml; transport: always html;
//Swagger - library to write documentation (router); There isn't standard by default
//CRUD: create, read, update and delete. 
