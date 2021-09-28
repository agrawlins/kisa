// Step 3 - this is the code for ./model.js

var mongoose = require('mongoose');

var didImgSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

var kisaImgSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

var policeImgSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});
//Image is a model which has a schema imageSchema
module.exports = new mongoose.model('did', didImgSchema);
module.exports = new mongoose.model('kisa', kisaImgSchema);
module.exports = new mongoose.model('policemen', policeImgSchema);