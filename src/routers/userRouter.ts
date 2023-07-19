import express from 'express';
import UserController from './../controllers/UserController.js'

const router = express.Router();

//get users
router.get('/', UserController.getAll);
// router.get('/:id', UserController.getOne);
// router.post('/', UserController.create);
// router.delete('/:id', UserController.delete);
// router.put('/:id', UserController.update);


//GET USERS; endpoint router (path);
/*router.get('/', ) //definindo uma função com REQUEST  e depois com RESPONSE.

 //GET USERS BY ID; endpoint router (path);
router.get('/users/:id', (req: express.Request, res: express.Response) =>{
    const userId = parseInt(req.params.id); //para buscar  ID do utilizador
    const user = users.find((user) => user.id === userId)
 
    if(!user) {
     return res.status(404).json({error: 'user not found'}) ;
    }
    console.log(user)
 
 return res.json(users)
 }) //definindo uma função com REQUEST  e depois com RESPONSE.
 
 //dados do utilizador tem que ser enviados pelo método POST.

 //create new user
 router.post('/users', (req: express.Request, res: express.Response) => {
     const newUser: IUser = {
         id: users.length + 1,
         name: req.body.name,
         email: req.body.email,
     }
     users.push(newUser);
     res.status(201).json(newUser);
 });
 
 router.delete('/users/:id', (req: express.Request, res: express.Response) => {
     const userId = parseInt(req.params.id);
     const deletedUser = users.find((user) => user.id === userId) as IUser;
 
     if(!deletedUser) {
         return res.status(404).json({error: 'user not found'})
     }
     const index = users.indexOf(deletedUser);
     users.slice(index, 1);
     res.json(deletedUser);
     });
 
 const msg: string = 'Hello NodeJS with TS!';
 console.log(msg)*/
 

 export default router;