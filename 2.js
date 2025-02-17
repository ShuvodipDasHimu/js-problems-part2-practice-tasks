const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestFriend(friends){
  let smallest = friends[0];
  for(let i = 0; i < friends.length; i++){
    if(friends[i].length < smallest.length){
      smallest = friends[i];
    }
  }
  return smallest;
}

const result = smallestFriend(friends);
console.log(result);