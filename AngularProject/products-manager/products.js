var faker = require('faker')

function generateProducts() {
    var products = []

    for (var id = 0; id < 50; id++) {
        var product = faker.commerce.product();
        var department = faker.commerce.department(max = 10);
        var productName = faker.commerce.productName();
        var price = faker.commerce.price();
        var productMaterial = faker.commerce.productMaterial();
        var color = faker.commerce.color();


        products.push({
            "id": id,
            "product": product,
            "department": department,
            "productName": productName,
            "price": price,
            "productMaterial": productMaterial,
            "color": color
        })
    }

    return { "products": products }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProducts