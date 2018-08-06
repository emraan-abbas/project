// MODEL (Schema)

const mongoose = require ("Mongoose");

const channelSchema = mongoose.Schema({
	channel_name:{
		type : String,
		required : true
	},

	videos_list:[{
		link:
		{
			type : String,
		},

		date : {
			type:Date,
			default : Date.now()
		}
	}]
});


let channel = module.exports = mongoose.model('Channel',channelSchema);

//Get all channels
module.exports.getChannels = (callback,limit)=>{
	channel.find(callback).limit(limit);
}

// get specific channel
module.exports.getChanneById = (id,callback)=>{
	channel.findbyId(id,callback);
}

// add channel
module.exports.addChannel = (data,callback)=>{
	let add={                                  
		channel_name : data.channel_name,
		channel_Id : data.channel_Id,
		videos_list : data.videos_list
	}
	channel.create(add,callback);                 
}

// edit channel
module.exports.editChannel = (id,data,option,callback)=>{     
	let query={_id:id}                                     
	let update = {                                         
		channel_name : data.channel_name,
		videos_list : data.videos_list
	}
	channel.findOneAndUpdate(query, update, option, callback);     
}

// dalete channel
module.exports.removeChannel = (id,callback)=>{
	let query={_id:id}
	channel.findOneAndRemove(query, callback);                   
}

