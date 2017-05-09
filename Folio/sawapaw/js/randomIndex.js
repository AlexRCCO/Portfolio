const uniqueIndex = [];

let numRandoms = musiques.length;

const randomIndex = function() {
  if(uniqueIndex.length === 0) {
    for(let i = 0; i < numRandoms; i++) {
      uniqueIndex.push(i);
    }
  }
  let a = uniqueIndex[Math.floor(Math.random() * uniqueIndex.length)];
  if(uniqueIndex.length >= 1) {
  uniqueIndex.splice(a, 1);
  } else {
    uniqueIndex.splice(0, 1);
  }
  return a;
};

