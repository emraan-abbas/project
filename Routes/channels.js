// ROUTES

const express = require('Express');
const router = express.Router();
const channel = require('../Model/channel.js');


//all Channels
router.get('/',(req,res)=>{
	console.log("INSIDE !")
	channel.getChannels((err,test)=>{            
		if (err){
			console.log("Error at getChannel")
			res.send("Error at getChannel")
		}
		console.log(test)
		res.json(test);
	})
})

//specific test
router.get('/:id',(req,res)=>{
	let id = req.parms.id;                 
	console.log('Requested id = '+id); 
	channel.getChannelById(id,(err,test)=>{
		if(err){
			console.log('Error at getSpecificChannel')
			res.send('Error at getSpecificChannel')
		}
		res.json(channel)
	})
})

//add test
router.post('/add',(req,res)=>{
	let obj = req.body.channel;            
	console.log(req.body.channel);
	channel.addChannel((err,channel)=>{
		if(err){
			console.log("Error at addChannel");
			res.send("Error at addChannel");
		}
		res.json(channel);
	},obj)
})


//Updation
router.put('/:id',(req,res)=>{
	let id = req.params.id;              
	let edit = req.params.channel;          
	channel.editChannel(id,edit,{},(err,channel)=>{        
		if(err){
			console.log("Error at editChannel1")
			
		}
		console.log('no error : '+channel)
	})
})

//deletion
router.delete('/:id',(req,res)=>{
	let id = req.params.id;                
	channel.removeChannel(id,(err,channel)=>{      
		if(err){
			console.log('Error at deletion');
		}
		console.log('No Error: '+channel)
	})
})


module.exports = router;
