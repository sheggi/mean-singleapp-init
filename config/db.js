module.exports = {
	url: 'mongodb://localhost/portemonaie-dev'
}

// Spezifikationen der Collektionen in der DB
var mongoose = require('mongoose');    
module.exports.collections = {};

var moneySchema = new mongoose.Schema({ date: Number, value: Number, description: String });
var money = mongoose.model('money', moneySchema);
module.exports.collections.money = money;