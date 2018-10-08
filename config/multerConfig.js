const multer = require("Multer");
const path = require("path");

//to give the storage location and file name;
const storage = multer.diskStorage({
    destination: '../videos/',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// //to validate the file is in vallide "jpeg|jpg|png" format
// const checkFileType = (file, callback) => {
// 	//Allowed Ext
// 	const fileTypes = /jpeg|jpg|png/;
// 	//check Ext
// 	const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
// 	//check mimeType
// 	const mimetype = fileTypes.test(file.mimetype);
//     if (extName && mimetype){
//         callback(null, true);
//     } else {
//         callback("Error: Image Only..!!!");
//     }
// }

const uploadProductImage = multer({
    storage: storage,
    limits: {fileSize: 20971520},//20MB file size limit
	// fileFilter: (req,file,callback) => {
	// 	checkFileType(file,callback);
	// }
}).single('file');


module.exports.saveProductImage = (req,res, callback) => {
    uploadProductImage(req,res, (err)=>{
		if(err){
			callback(err);
		}
		else{
            callback(null,req.file.filename);
		}
    }
)};