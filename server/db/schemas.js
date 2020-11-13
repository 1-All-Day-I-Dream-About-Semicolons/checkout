var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    department: String,
    itemName: String,
    itemPhoto: String,
    color: String,
    price: Number,
    size: String,
    stock: Number, 
    reviews: [{
        stars: Number,
        description: String
    }]
});
var userSchema = mongoose.Schema({
    email: String,
    bag: [Number],
    favorites: [Number],
    request: [Number]
});

var itemModel = mongoose.model('Item', itemSchema);
var userModel = mongoose.model('User', userSchema);

function findAll(query, callback) {
    if (query === 'items') {
        itemModel.find({}, callback);
    } else if (query === 'users') {
        userModel.find({}, callback);
    }
}

function findItemsByName(itemName, callback) {
    itemModel.find({ itemName: itemName }, callback);
}
function findUserByEmail(email, callback) {
    userModel.find({ email: email }, callback);
}
function findItemById (id, callback) {
    itemModel.find({_id : id}, callback);
}
//......................................
// only to be used for seeding purposes:
function insertOne(query, obj, itemId, callback) {
    if (query === 'item') {
        itemModel.create(obj, callback);
    } else if (query === 'user') {
        userModel.create(obj, callback);
    } else if (query === 'review') {
        itemModel.findOneAndUpdate({ _id: itemId },
            { $push: { review: obj } })
    }  
}
//......................................

function addItemID(basketName, itemID, email, callback) {
    var query = { email: email }
    if (basketName === 'bag') {
        userModel.findOneAndUpdate({ email: email },
            { $push: { bag: itemID } })
    } else if (basketName === 'favorites') {
        userModel.findOneAndUpdate({ email: email },
            { $push: { favorites: itemID } })
    } else {
        userModel.findOneAndUpdate({ email: email },
            { $push: { request: itemID } })
    }

}


exports.findAll = findAll;
exports.findItemsByName = findItemsByName;
exports.findUserByEmail = findUserByEmail;
exports.findItemById = findItemById;
exports.insertOne = insertOne;
exports.addItemID = addItemID;
