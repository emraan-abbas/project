// MODEL (Schema)

const mongoose = require ("Mongoose");

const feedbackSchema = mongoose.Schema({
	feedback_name:{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'feedback'
	},

	comments:{
		type : String,
		required : true
	},

	date:{
		type : Date,
		default : Date.now
	}
});


let feedback = module.exports = mongoose.model('Feedback',feedbackSchema);

//Get all Feedbacks
module.exports.getFeedbacks = (callback,limit)=>{
	feedback.find(callback).limit(limit);
}

// get specific feedback
module.exports.getFeedback = (id,callback)=>{
	feedback.findbyId(id,callback);
}

// add feedback
module.exports.addFeedback = (data,callback)=>{
	let add={                                  
		feedback_name : data.feedback_name,
		comments : data.comments,
		date : data.date
	}
	feedback.create(add,callback);                 
}

// edit feedback
module.exports.editFeedback = (callback,id,option,data)=>{     
	let query={_id:id}                                     
	let update = {                                         
		feedback_name : data.feedback_name,
		comments : data.comments,
		date : data.date
	}
	feedback.findOneAndUpdate(query, update, option, callback);     
}

// dalete feedback
module.exports.removeFeedback = (id,callback)=>{
	let query={_id:id}
	feedback.remove(query, callback);                   
}

