//só vai utilizar request e response
//pass são criadas com CLASS, podem ter atributos;
//o Controller serve para receber informação e enviar para o serviço;
import { Console } from "console";
import { Request, Response } from "express";
import { IUser} from "../models/userModel.js";
import userService from "../Services/userService.js";

//get users
let users: IUser[] = [];

users = [{id: 1, name: 'jessica', email: 'jessica@outlook.com'},
        {id:2, name: 'luis', email: 'luis@outlook.pt'}]
users.push({id:3, name: 'fiama', email:'fiama@outlook.com'})

class UserController {
    //get all users
   async getAll(req: Request, res: Response) {
    try{
        const allUsers = await userService.getAll();
         res.json(allUsers)
    } catch(err) {
        console.log(err)
        res.status(500);
        res.send({errorMessge: 'failed to delete user', error: err})
    }
        
    }

    //get one user by ID
  /*  getOne(req: Request, res: Response) {
        const userId = parseInt(req.params.id); //para buscar  ID do utilizador
        const user = users.find((user) => user.id === userId)
     
        if(!user) {
          res.status(404).json({error: 'user not found'}) ;
        }
      res.json(user)
     }
     create(req: Request, res: Response) {
        try {
            console.log(req.body);
            const createdUser: IUser = {
                id: users.length + 1,
                name: req.body.name,
         email: req.body.email,
     }
     users.push(createdUser);
     res.status(201).json(createdUser);
        } catch (err) {
            console.log(err);
            res.status(500).send({ errorMessage: 'Failed to create user', error:err})
        }
     }
     delete(req:Request, res: Response) {
        try{
            const userId = parseInt(req.params.id);

            const deletedUserIndex = users.findIndex((user) => user.id === userId);
    
        if(!deletedUserIndex) {
            return res.status(404).json({error: 'user not found'})
        }
        const deletedUser = users.splice(deletedUserIndex, 1)[0];
        res.json(deletedUser)
        } catch(err) {
            console.log(err);
            res.status(500).send({errorMessage: 'Failed to delete user', error: err})
        }
     }
     update(req:Request, res: Response) {
        //get user ID from URI parameters
        const userId = parseInt(req.params.id);

        //find user index by ID;
        const updatedUserIndex = users.findIndex((user) => user.id === userId); //a função findIndex retorna -1 se o index não existir

        //if user is not found then return an error message
        if(updatedUserIndex === -1) {
            res.status(404).json({error: 'User not found'})
        }

        //create a new user object with same id and updated fields
        const updatedUser:IUser = {
            id: userId,
            name: req.body.name,
            email: req.body.email
        }
        //replace
        users[updatedUserIndex] = updatedUser;
        res.json(updatedUser);
     }*/


export default new UserController();

