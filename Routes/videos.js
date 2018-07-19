// ROUTES

const express = require('Express');
const router = express.Router();
const video = require('../Model/video.js');


//all videos
router.get('/',(req,res)=>{
	console.log("INSIDE !")
	video.getVideos((err,video)=>{            
		if (err){
			console.log("Error at getVideo")
			res.send("Error at getVideo")
		}
		console.log(video)
		res.json(video);
	})
})

//specific video
router.get('/:id',(req,res)=>{
	let id = req.params.id;                 
	console.log('Requested id = '+id); 
	video.getVideoById(id,(err,video)=>{
		if(err){
			console.log('Error at getSpecificVideo')
			res.send('Error at getSpecificVideo')
		}
		res.json(video);
	})
})

//add User
router.post('/add',(req,res)=>{
	let obj = req.body.video;            
	console.log(req.body.video);
	video.addVideo(obj,(err,video)=>{
		if(err){
			console.log("Error at addVideo");
			res.send("Error at addVideo");
		}
		res.json(video);
	})
})


//Updation
router.put('/:id',(req,res)=>{
	let id = req.params.id;              
	let edit = req.body.video;          
	video.editVideo(id,edit,{},(err,video)=>{        
		if(err){
			console.log("Error at editVideo")
			
		}
		console.log('no error : ')
		res.json(video);
	})
})

//deletion
router.delete('/:id',(req,res)=>{
	let id = req.params.id;                
	video.removeVideo(id,(err,video)=>{      
		if(err){
			console.log('Error at deletion');
		}
		console.log('No Error: '+video)
		res.json(video);;
	})
})


module.exports = router;