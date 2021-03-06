import axios from 'axios';
import Noty from 'noty';

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');

// update cart
function updateCart(pizza){
    // 
    axios.post('/update-cart', pizza).then(res => {
        // console.log(res);
        cartCounter.innerText = res.data.totalQty;
        new Noty({
            type : 'success',
            timeout : 1000,
            text : "Item added to cart",
            progressBar : false,
        }).show();
    }).catch(err =>{
        new Noty({
            type : 'error',
            timeout : 1000,
            text : "Something get wrong",
            progressBar : false,
        }).show();
    })
}


addToCart.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        //let pizza = btn.dataset.pizza; //dataset => work for getting data-pizza attribute form home.ejs.(String)
        let pizza = JSON.parse(btn.dataset.pizza); //dataset => work for getting data-pizza attribute form home.ejs.(object)
        updateCart(pizza);
        // console.log(pizza);
    })
})