
var conResult = document.getElementById('containerOfResult');

function runderResult (){
    

    for (var j = 0; j < chosenProduct.length; j++) {
        var product = document.createElement('div');
        conResult.appendChild(product);
        
        var image = document.createElement('img');
        product.appendChild(image);
        image.setAttribute('src', chosenProduct[j].imagePath);
        image.setAttribute('alt', chosenProduct[j].name);
        image.setAttribute('id', chosenProduct[j].name);
        var kidsName = document.createElement('p');
        product.appendChild(kidsName);
        kidsName.textContent =`Done by: ${chosenProduct[j].name}.`;
        var productPrice = document.createElement('p');
        product.appendChild(productPrice);
        productPrice.textContent =`Price: ${chosenProduct[j].price} $`;


    }
    var totalOfProducts = document.createElement('span');
    conResult.appendChild(totalOfProducts);
    totalOfProducts.textContent =`Total: ${total} $`;


}

function getResult (){
    var getProduct = localStorage.getItem('localchosenProducts');
    var getTotal = localStorage.getItem('total');
    if(getProduct && getTotal){
        chosenProduct = JSON.parse(getProduct);
        total = JSON.parse(getTotal);
        runderResult();
    }
    

}
getResult();