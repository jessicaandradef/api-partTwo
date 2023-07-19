//trabalha com a lógica envolvida

import { IUser} from "../models/userModel.js";

//get users
let users: IUser[] = [];

users = [{id: 1, name: 'jessica', email: 'jessica@outlook.com'},
        {id:2, name: 'luis', email: 'luis@outlook.pt'}]
users.push({id:3, name: 'fiama', email:'fiama@outlook.com'})

class UserService {
    //get all users
    async getAll(): Promise<IUser[]> {
        const allUsers = users;
        return await allUsers;
        }

//get one user by ID        
async getOne(id:number): Promise<IUser | undefined> {
        const user = users.find((user) => user.id === id)
     
        if(!user) {
          res.status(404).json({error: 'user not found'}) ;
        }
      

    /*
     create() {
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
     delete() {
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
     update() {
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
     } */
}

export default new UserService();

