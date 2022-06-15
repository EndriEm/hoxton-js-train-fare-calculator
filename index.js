let age = Number(prompt("How old are you?"));

let distance = Number(prompt("How far is your destination? (Km)"));

let pricePerKm = 0.21;

let price = distance * pricePerKm;

let under18 = 0.2;
let over65 = 0.4;


let under18Price = price - (price * under18);
let over65Price = price - (price * over65);

let totalPrice;

if (age < 18) {
    totalPrice = under18Price;
}

else if (age >= 18 && age < 65) {
    totalPrice = price;
}

else (age >= 65) 
{
    totalPrice = over65Price;
}

console.log("Your payment is " + totalPrice + "$" );