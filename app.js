const express = require("Express");
const mongoose = require("Mongoose");
const bodyparser = require("body-parser");
const app = express();


const user = require("./Routes/users.js");
const channel = require("./Routes/channels.js");
const feedback = require("./Routes/feedbacks.js");
const topic = require("./Routes/topics.js");
const video = require("./Routes/videos.js");


const port = process.env.PORT||3000;

//Set Parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//Connection String
// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:toor123@ds263640.mlab.com:63640/project").then(console.log("DB Connected"));

//set_page
app.use(express.static(__dirname + '/public'));


//set route
app.use('/user',user);
app.use('/channel',channel);
app.use('/feedback',feedback);
app.use('/topic',topic);
app.use('/video',video);



//Server
app.listen(port,()=>{
	console.log("Running on Port = "+port)
})


