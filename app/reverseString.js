
function reverse(string) {
  var reversed = ' ';
  for (var i = string.length - 1; i >= 0; i--){
  reversed += string[i];}
	if (string == ' ') {
      return null;
    }
    else if (reversed == string) {
      return true;
    }
    else {
		return reversed;
}
}
