// MODEL (Schema)

const mongoose = require ("Mongoose");

const channelSchema = mongoose.Schema({
	channel_name:{
		type : String,
		required : true
	},

	channel_Id:{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'channel'
	},

	videos_list:[{
		
			link:{
			type : String,
			required : true
		},
		date : {
			type:Date,
			default : Date.now
		}
	}]
});


let channel = module.exports = mongoose.model('Channel',channelSchema);

//Get all channels
module.exports.getChannels = (callback,limit)=>{
	channel.find(callback).limit(limit);
}

// get specific channel
module.exports.getChannel = (id,callback)=>{
	channel.findbyId(id,callback);
}

// add channel
module.exports.addChannel = (callback,data)=>{
	let add={                                  
		channel_name : data.channel_name,
		channel_Id : data.channel_Id,
		videos_list : data.videos_list
	}
	channel.create(add,callback);                 
}

// edit channel
module.exports.editChannel = (callback,id,option,data)=>{     
	let query={_id:id}                                     
	let update = {                                         
		channel_name : data.channel_name,
		channelId : data.channelId,
		videos_list : data.videos_list
	}
	channel.findOneAndUpdate(query, update, option, callback);     
}

// dalete channel
module.exports.removeChannel = (id,callback)=>{
	let query={_id:id}
	channel.remove(query, callback);                   
}

