// MODEL (Schema)

const mongoose = require ("Mongoose");

const videoSchema = mongoose.Schema({
	path:{
		type : String,
		required : true
	},
	tags:{
		type : String,
		required : true
	},

	rating:{
		type : Number,
		require : true
	},
	date : {
		type:Date,
		default : Date.now()
	}
});


let video = module.exports = mongoose.model('Video',videoSchema);

//Get all Videos
module.exports.getVideos = (callback,limit)=>{
	video.find(callback).limit(limit).populate('userId','first_name');
}



// add Video
module.exports.addVideo = (data,callback)=>{
	console.log(data);
	let add={                                  
		path : data.path,
		tags : data.tags,
		rating : data.rating
	}
	video.create(add,callback);                 
}

// edit Video
module.exports.editVideo = (id,data,option,callback)=>{     
	let query={_id:id}                                     
	let update = {                                         
		path : data.path,
		tags : data.tags,
		rating : data.rating
	}
	video.findOneAndUpdate(query, update, option, callback).populate('userId','first_name');     
}

// dalete Video
module.exports.removeVideo = (id,callback)=>{
	let query={_id:id}
	video.remove(query, callback);                   
}

