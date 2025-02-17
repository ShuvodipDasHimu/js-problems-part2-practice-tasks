const devices = [
  { name:'laptop', price: 35000},
  { name:'tablet', price: 15000},
  { name:'mobile', price: 20000}
]

function calculateElectronicsBudget(products){
  let total = 0;
  for(product of products){
    total = total + product.price;
  }
  return total;
}

const total = calculateElectronicsBudget(devices);
console.log("Total cost of your electronics shopping is:", total, "BDT");
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.