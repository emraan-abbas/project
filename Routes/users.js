// ROUTES

const express = require('Express');
const router = express.Router();
const user = require('../Model/user.js');


//all Users
router.get('/',(req,res)=>{
	console.log("INSIDE !")
	user.getUsers((err,user)=>{            
		if (err){
			console.log("Error at getTest")
			res.send("Error at getTest")
		}
		console.log(user)
		res.json(user);
	})
})

//specific User
router.get('/:id',(req,res)=>{
	let id = req.parms.id;                 
	console.log('Requested id = '+id); 
	user.getUserById(id,(err,test)=>{
		if(err){
			console.log('Error at getSpecificTest')
			res.send('Error at getSpecificTest')
		}
		res.json(test)
	})
})

//add User
router.post('/add',(req,res)=>{
	let obj = req.body.user;            
	console.log(req.body.ser);
	user.addUser(obj,(err,user)=>{
		if(err){
			console.log("Error at addUser");
			res.send("Error at addUser");
		}
		res.json(user);
	})
})


//Updation
router.put('/:id',(req,res)=>{
	let id = req.params.id;              
	let edit = req.body.user;          
	user.editUser(id,edit,{},(err,user)=>{        
		if(err){
			console.log("Error at editUser")
			
		}
		console.log('no error : '+user)
		res.json(user);
	})
	
})

//deletion
router.delete('/:id',(req,res)=>{
	let id = req.params.id;                
	user.removeUser(id,(err,user)=>{      
		if(err){
			console.log('Error at deletion');
		}
		console.log('No Error: ')
		res.json(user);
	})
})


module.exports = router;