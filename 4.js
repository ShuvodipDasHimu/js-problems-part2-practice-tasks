const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(products){
  let total = 0;
  let avg;
  for(const product of products){
    const productsAmount = products.length;
    total = product.price + total;
    avg = Math.floor(total / products.length);
  }
  return avg;
}

const result = findAveragePhonePrice(phones);
console.log("Average price of phone:", result, "BDT");