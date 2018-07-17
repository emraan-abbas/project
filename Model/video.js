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
	}
});


let video = module.exports = mongoose.model('Video',videoSchema);

//Get all Videos
module.exports.getVideos = (callback,limit)=>{
	video.find(callback).limit(limit);
}

// get specific Video
module.exports.getVideo = (id,callback)=>{
	video.findbyId(id,callback);
}

// add Video
module.exports.addVideo = (callback,data)=>{
	let add={                                  
		path : data.path,
		tags : data.tags,
		rating : data.rating
	}
	video.create(add,callback);                 
}

// edit Video
module.exports.editVideo = (callback,id,option,data)=>{     
	let query={_id:id}                                     
	let update = {                                         
		path : data.path,
		tags : data.tags,
		rating : data.rating
	}
	video.findOneAndUpdate(query, update, option, callback);     
}

// dalete Video
module.exports.removeVideo = (id,callback)=>{
	let query={_id:id}
	video.remove(query, callback);                   
}

