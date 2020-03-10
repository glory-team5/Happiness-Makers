var Names = ['Ahmed', 'Baraa', 'Bashar', 'Esraa', 'Majd', 'Osama', 'Tasneem', 'Razan', 'Reham', 'Samer', 'Leen', 'Shihab'];
var Price = [10, 15, 7, 20, 12, 25, 8, 17, 30, 22, 27, 16];
var chosenProduct = [];
total = 0;
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
        
        var image = document.createElement('img');
        product.appendChild(image);
        image.setAttribute('src', Items.all[j].imagePath);
        image.setAttribute('alt', Items.all[j].name);
        var kidsName = document.createElement('p');
        product.appendChild(kidsName);
        kidsName.textContent =`Done by: ${Items.all[j].name}.`;
        var productPrice = document.createElement('p');
        product.appendChild(productPrice);
        productPrice.textContent =`Price: ${Items.all[j].price} $`;
        var addToCart = document.createElement('button');
        product.appendChild(addToCart);
        addToCart.textContent =`Add To Cart`;
        addToCart.setAttribute('id', Items.all[j].name);

    }
}
render();
var total;

var container = document.getElementById('container');

container.addEventListener('click' , choseProduct);

function choseProduct (event) {
if (event.target.id !== 'container' ){
    for (var x = 0 ; x < Names.length ; x++ ) {
        if(event.target.id == `${Items.all[x].name}`){
          if(!chosenProduct.includes(Items.all[x])){
                chosenProduct.push(Items.all[x]);                 
                total = total + Items.all[x].price;
                updates(); 
                console.log(total);  
            }
        }
    }
}
}

function updates (){
    var localProducts = JSON.stringify(chosenProduct);
    localStorage.setItem('localchosenProducts',localProducts);
    var totalOfproducts = JSON.stringify(total);
    localStorage.setItem('total',totalOfproducts);
}



