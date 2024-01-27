// //
// * Three parts 
// * conditions  ?  do something when true  : do something when false

money = 300;

money >= 500 ? console.log('Go to a shopping') : console.log('buy a chocolate')

let price = 400;
const isLeader = false;

if (isLeader == false){
    if(price>500) {
    price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 100;
}
console.log(price) 

price = isLeader == true? price > 500 ? price/2 : 0 : price + 100;