var Names = ['Ahmed', 'Baraa', 'Bashar', 'Esraa', 'Majd', 'Osama', 'Tasneem', 'Razan', 'Reham', 'Samer', 'Leen', 'Shihab'];
var Price = ['10$', '15$', '20$', '12$', '8$', '17$', '13$', '18$', '25$', '30$', '22$', '7$'];


function Items(name, price) {
    this.name = name;
    this.price = price;
    this.imagePath = `../img/store/${this.name}.jpeg`;
    Items.all.push(this);
}
Items.all = [];
// to create new Items //
for (var i = 0; i < Names.length; i++) {
    new Items(Names[i], Price[i]);

}

var container = document.getElementById('container');
function render() {

    for (var j = 0; j < Names.length; j++) {
        var product = document.createElement('div');
        container.appendChild(product);
        product.setAttribute('id', Items.all[j].name);
        var image = document.createElement('img');
        product.appendChild(image);
        image.setAttribute('src', Items.all[j].imagePath);
        image.setAttribute('alt', Items.all[j].name);
        var kidsName = document.createElement('p');
        product.appendChild(kidsName);
        kidsName.textContent =`Done by: ${Items.all[j].name}.`;
        var productPrice = document.createElement('p');
        product.appendChild(productPrice);
        productPrice.textContent =`Price: ${Items.all[j].price}`;

    }
}
render();