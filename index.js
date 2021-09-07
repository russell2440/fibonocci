//
// returns fibonocci number associated with index
//
function fibonocci_recursive(index){
  if(index < 2) {
    return index;
  }
  return fibonocci_recursive(index-1)+fibonocci_recursive(index-2);
}


for (let i = 0; i<10; i++){
  console.log("fibrecurse: "+i+", "
    +fibonocci_recursive(i));
}
