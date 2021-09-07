//
// returns fibonocci number associated with index
//
function fibonocci_recursive(index){
  if(index < 2) {
    return index;
  }
  return fibonocci_recursive(index-1)+fibonocci_recursive(index-2);
}

fibonocci_recursive(8);

for (let i = 0; i++; i<10){
  console.log("fibrecurse: "+i+", "
    +fibonocci_recursive(i));
}