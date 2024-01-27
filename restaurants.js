const age = 55;
const price= 1000;
if (age <= 12) {
 console.log('You can eat free');
}
else if (age >=60) {
    // 10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >=50) {
    // 5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price);
}
