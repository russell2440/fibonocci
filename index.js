//
// returns fibonocci number associated with index
//
function fibonocci_recursive(index){
  if(index < 2) {
    return index;
  }
  return fibonocci_recursive(index-1)+fibonocci_recursive(index-2);
}

function fibonocci_iterative(index){
  let arr = [0,1];
  for(let i = 2; i < index+1; i++) {
    arr.push(arr[i-2]+arr[i-1]);
  }
  return arr[index];
}


for (let i = 0; i<10; i++){
  console.log("fibrecurse: "+i+", "
    +fibonocci_recursive(i));
}
console.log("=============================")
for (let i = 0; i<10; i++){
  console.log("fibrecurse: "+i+", "
    +fibonocci_iterative(i));
}
