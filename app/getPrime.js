 getPrime(n){
  arr=[];
if(n == " "){
  return 'Argument must be an integer';
  }
if (typeof n === 'undefined') {
      return undefined;
} else if (typeof n <= 1) {
      return 'Argument should greater than one';
} else if ((n instanceof Array)) {
      return 'Arrays are not accepted';
} else if (arguments.length > 1) {
      return 'Only one argument is required';
} else if (typeof n === 'string') {
      return 'Strings are not accepted argument types';
}  else if (typeof n !== 'number') {
      return 'Only numbers are accepted';
} else if (n <= 1) {
      return 'Values less than 2 are not accepted, negatives included';
}else if (n == String){
  return 'Argument must be an integer '
  }
for(var i=2; i<n; i++){
  if (n % 1=== 0 && n % 2===0){
    return false;
  }

arr.push(n)
 return arr[i];

}
