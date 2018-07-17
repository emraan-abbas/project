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
	let obj = req.body.User;            
	console.log(req.body.User);
	user.addUser((err,test)=>{
		if(err){
			console.log("Error at addTest");
			res.send("Error at addTest");
		}
		res.json(test);
	},obj)
})


//Updation
router.put('/:id',(req,res)=>{
	let id = req.params.id;              
	let edit = req.params.User;          
	user.editUser(id,edit,{},(err,test)=>{        
		if(err){
			console.log("Error at editTest")
			
		}
		console.log('no error : '+test)
	})
	
})

//deletion
router.delete('/:id',(req,res)=>{
	let id = req.params.id;                
	user.removeUser(id,(err,test)=>{      
		if(err){
			console.log('Error at deletion');
		}
		console.log('No Error: '+test)
	})
	res.send("Deleted");
})


module.exports = router;