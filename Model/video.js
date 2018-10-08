// MODEL (Schema)

const mongoose = require ("Mongoose");

const videoSchema = mongoose.Schema({
	path:{
		type : String,
		required : true
	},
	channelId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Channel'
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


module.exports.getfeed = (id,callback)=>{
	video.find( { userId : { $nin: [id] } },callback ).populate('userId','first_name');
	
}

// get specific Video
module.exports.getVideoByUserId = (id,callback)=>{
	query = {userId:id}
	video.find(query,callback).populate('userId','first_name');
}

// add Video
module.exports.addVideo = (data,callback)=>{
	let add={                                  
		path : data.path,
		tags : data.tags,
		rating : data.rating,
		userId : data.userId
	}
	video.create(add,callback);                 
}

// edit Video
module.exports.editVideo = (id,data,option,callback)=>{     
	let query={_id:id}                                     
	let update = {                                         
		path : data.path,
		tags : data.tags,
		rating : data.rating,
		userId : data.userId

	}
	video.findOneAndUpdate(query, update, option, callback).populate('userId','first_name');     
}

// dalete Video
module.exports.removeVideo = (id,callback)=>{
	let query={_id:id}
	video.remove(query, callback);                   
}

