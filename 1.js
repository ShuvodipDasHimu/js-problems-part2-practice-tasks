const heights2 = [167, 190, 120, 165, 137];

function minHeight(value){
  let min = value[0];
  for(const val of value){
    if(val<min){
      return val;
    }
  }
}

const result = minHeight(heights2);
console.log(result);