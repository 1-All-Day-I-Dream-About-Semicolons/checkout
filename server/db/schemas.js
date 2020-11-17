var mongoose = require('mongoose');


var productSchema = mongoose.Schema({
    id: Number,
    department: String,
    itemName: String,
    productPhoto: String,
    color: String,
    sizeType: String,
    stock: [{
        itemId: Number,
        quantity: Number,
        price: Number,
        size: String
    }],
    reviews: [{
        stars: Number,
        description: String
    }]
});


//stretch goal
var userSchema = mongoose.Schema({
    email: String,
    bag: [Number],
    favorites: [Number],
    request: [Number]
});

var productModel = mongoose.model('Product', productSchema);
var userModel = mongoose.model('User', userSchema);

function findAll(callback) {
    productModel.find({}, callback);
}

function findProductByName(itemName, callback) {
    productModel.find({ itemName: itemName }, callback);
}
function findUserByEmail(email, callback) {
    userModel.find({ email: email }, callback);
}
function findProductById(id, callback) {
    productModel.find({ id: id }, callback);
}
//......................................
// only to be used for seeding purposes:
function insertOne(obj, callback) {
    productModel.create(obj, callback);
}
//......................................

function addProductId(basketName, productId, email, callback) {
    var query = { email: email }
    if (basketName === 'bag') {
        userModel.findOneAndUpdate({ email: email },
            { $push: { bag: productId } })
    } else if (basketName === 'favorites') {
        userModel.findOneAndUpdate({ email: email },
            { $push: { favorites: productId } })
    } else {
        userModel.findOneAndUpdate({ email: email },
            { $push: { request: productId } })
    }

}


exports.findAll = findAll;
exports.findProductByName = findProductByName;
exports.findUserByEmail = findUserByEmail;
exports.findProductById = findProductById;
exports.insertOne = insertOne;
exports.addProductId = addProductId;
