'use strict';

let jsonData = require('./09.json');

//Find all purchases made in February.
let purchaseInFebruary = [];
for(let i=0; i<jsonData.length;i++){
  if(jsonData[i].created_at.split('-')[1]=='02'){
    purchaseInFebruary.push(jsonData[i]);
  }
} 

//Find all purchases made by Ari, and add grand total by sum all total price of items. The output should only a number.
const grandTotal = (cart) => {
  let total = 0;
  for(let i=0; i<cart.length; i++){
    total = total+ parseInt(cart[i].items[0].price);
  }
  return total;
}
let purchaseMadebyAri = [];
for(let i=0; i<jsonData.length;i++){
  if(jsonData[i].customer.name=='Ari'){
    purchaseMadebyAri.push(jsonData[i]);
  }
}

//Find people who have purchases with grand total lower than 300000. The output is an array of people name. Duplicate name is not allowed.
let listCostumerwithDuplicate = [];
for(let i=0; i<jsonData.length;i++){
  listCostumerwithDuplicate.push(jsonData[i].customer.name);
}
let listCustomer = [...new Set(listCostumerwithDuplicate)]; //Delete duplicate name

let customerWithGradnTotalLowerThan300000 = [];
for(let i=0; i<listCustomer.length; i++){
  let purchaseMadeBySomeOne = []; //contain list cart by specific one
  for(let j=0; j<jsonData.length;j++){
    if(jsonData[j].customer.name==listCustomer[i]){
      purchaseMadeBySomeOne.push(jsonData[j]);
    }
  }
  if(grandTotal(purchaseMadeBySomeOne)<300000){
    customerWithGradnTotalLowerThan300000.push(listCustomer[i]);
  }
}

console.log(customerWithGradnTotalLowerThan300000);
 