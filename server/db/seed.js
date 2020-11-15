var faker = require('faker');
var mongoose = require('mongoose');
var dbModels = require('/home/rolo/Documents/SEI-hrsf131/checkout/server/db/schemas.js');

mongoose.connect('mongodb://localhost/checkout');

//array of imagelinks
var imageLinks = [
    `https://fecprojecthr.s3-us-west-1.amazonaws.com/Ultimate_Bra_(Plus_Size)_Black_FJ7342_21_model.jpg`,
    `https://fecprojecthr.s3-us-west-1.amazonaws.com/Don't_Rest_Badge_of_Sport_Glam_On_Bra_(Plus_Size)_Pink_GL5854_21_model.jpg`,
    `https://fecprojecthr.s3-us-west-1.amazonaws.com/Don't_Rest_Badge_of_Sport_Glam-On_Bra_Pink_GL5853_21_model.jpg`,
    `https://fecprojecthr.s3-us-west-1.amazonaws.com/Down_Regen_Hooded_Blocked_Puffer_Jacket_Black_GE1324_21_model.jpg`,
    `https://fecprojecthr.s3-us-west-1.amazonaws.com/Primeknit_Fine_Tights_Black_GD9404_21_model.jpg`,
    `https://fecprojecthr.s3-us-west-1.amazonaws.com/Ultimate_Bra_(Plus_Size)_Black_FJ7342_21_model.jpg`
];
//array of sizes
var sizes = [
    `2XS-A`,`2XS`, `XS`, `S`, `M`, `L`, `XL`, `1X`, `2X`, `3X`, `4X`, `2XL`, 
    `30"`, `32"`, `34`, `36"`, `38"`, `40"`, `42"`, `44"`, `46"`, `48"`
];

var random = (number) => (
    Math.floor(Math.random() * number)
);
//create 100 items by running a 100x for loop
var products = [];
for (var i = 0; i < 100; i++) {
    var product = {
        id: i,
        department: faker.commerce.department(),
        itemName: faker.commerce.productName(),
        productPhoto: imageLinks[random(imageLinks.length)],
        color: faker.commerce.color(),
        stock: [],
        reviews: []
    };
    for (var j = 0; j < random(5); j++) {
        product.reviews.push({
            stars: random(5),
            description: faker.commerce.productDescription()
        })
        product.stock.push({
            itemId: random(1000),
            quantity: random(20),
            price: faker.commerce.price(),
            size: sizes[random(sizes.length)]
        })
      
    }
    products.push(product);
    dbModels.insertOne(product, (err, result) => {
        console.log(product);
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}



//insert into database


//STRETCH GOAL
// for (var i = 0; i < 100; i++) {
//     var user = {
//         email: faker.internet.email(),
//         bag: [],
//         favorites: [],
//         request: []
//     };
//     for (var j = 0; j < random(5); j++) {
//         var bfr = random(3);
//         if (bfr === 0) {
//             user.bag.push()//insert _id from randomly chosen item
//         } else if (bfr === 1) {
//             user.favorites.push()//insert _id from randomly chosen item
//         } else {
//             user.request.push()//insert _id from randomly chosen item
//         }
//     }
// }

