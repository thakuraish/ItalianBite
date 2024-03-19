import {foodItem} from './foodItem.js'

console.log(foodItem);

function displayItems(){
    var pizza= document.getElementById('pizza');
    var side=  document.getElementById('side');
    var pasta=  document.getElementById('pasta');
    var burger=  document.getElementById('burger');
    var bread=  document.getElementById('bread');
    var shakes=  document.getElementById('shakes');

    const pizzaData= foodItem.filter((item)=>item.category=='pizza');
    console.log(pizzaData);
    const sideData= foodItem.filter((item)=>item.category=='side');
    console.log(sideData);
    const pastaData= foodItem.filter((item)=>item.category=='pasta');
    console.log(pastaData);
    const burgerData= foodItem.filter((item)=>item.category=='burger');  
    console.log(burgerData);
    const breadData= foodItem.filter((item)=>item.category=='bread');
    console.log(breadData);
    const shakeData= foodItem.filter((item)=>item.category=='shakes');
    console.log(shakeData);

    pizzaData.map(item=>{

        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        pizza.appendChild(itemCard);

    })

    sideData.map(item=>{

        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        side.appendChild(itemCard);

    })

    pastaData.map(item=>{

        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        pasta.appendChild(itemCard);

    })

    burgerData.map(item=>{

        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        burger.appendChild(itemCard);

    })

    breadData.map(item=>{

        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        bread.appendChild(itemCard);

    })

    shakeData.map(item=>{

        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        shakes.appendChild(itemCard);

    })
}
displayItems();

const categoryListData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function categoryList(){
    var categoryList= document.getElementById('category-list');

    categoryListData.map(item=>{
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg= document.createElement('img');
        listImg.src= item.img;

        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })
}
categoryList();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart);
})

var cartData=[];

function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);

    console.log(itemObj);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];

        console.log(cartData);
    }
    else if(index > -1){
        alert("Added to cart");
    }

    document.getElementById('cart-plus').innerText=' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText=' ' + cartData.length+'Items';
    totalAmount();
    cartItems();

}   
function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');

        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);

        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;

        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerHTML= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerHTML= '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);


    })

    document.querySelectorAll('.increase-item').forEach(item=>{ item.addEventListener('click',incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{item.addEventListener('click',decrementItem);
    })
}

var currPrice=0;

 function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

var flag=false;

function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToDec);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }

    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML= ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerHTML= ' ' + cartData.length+'Items';
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}  

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : Rs ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : Rs ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);


function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
    
    }
    else{
        alert("Currently no item in cart!");
    }
}
document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);
function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
        document.getElementById('m-add-address').innerText= ' ' + address;
    }
    else{
        document.getElementById('add-address').innerText= 'Your Address ';
        alert("Address not added");
    }
}


window.onresize= window.onload= function(){
    var size=window.innerWidth;
    console.log(size);
    if(size<800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();

    }
   
}
function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{ item.addEventListener('click',addTocart);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{ item.addEventListener('click',incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{item.addEventListener('click',decrementItem);
    })
}




