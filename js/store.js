var Names = ['Ahmed', 'Baraa', 'Bashar', 'Esraa', 'Majd', 'Osama', 'Tasneem', 'Razan', 'Reham', 'Samer', 'Leen', 'Shihab'];
var Price = ['10$', '15$', '20$', '12$', '8$', '17$', '13$', '18$', '25$', '30$', '22$', '7$'];
var chosenProduct = [];

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
        image.setAttribute('id', Items.all[j].name);
        var kidsName = document.createElement('p');
        product.appendChild(kidsName);
        kidsName.textContent =`Done by: ${Items.all[j].name}.`;
        var productPrice = document.createElement('p');
        product.appendChild(productPrice);
        productPrice.textContent =`Price: ${Items.all[j].price}`;

    }
}
render();

var container = document.getElementById('container');

container.addEventListener('click' , choseProduct);

function choseProduct (event) {
if (event.target.id !== 'container' ){
    console.log('wtt');
    

    for (var x = 0 ; x < Names.length ; x++ ) {

        if(event.target.id == `${Items.all[x].name}`){

          if(!chosenProduct.includes(Items.all[x])){

                chosenProduct.push(Items.all[x]);
                updates();     
            }
        }
    }
}
}

function updates (){
    var localProducts = JSON.stringify(chosenProduct);
    localStorage.setItem('localchosenProducts',localProducts);
}

