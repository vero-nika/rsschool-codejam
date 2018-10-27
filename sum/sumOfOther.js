function sumOfOther(arr1) {
let sum = 0;
for(var i = 0; i < arr1.length; i++){
  sum += arr1[i];
}
let arr2 = arr1.map( function(value) { 
  return sum - value; 
} );
return(arr2);
}
let arr1 = [5,6,7];
console.log(sumOfOther(arr1));