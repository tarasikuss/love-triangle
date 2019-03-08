/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var quantity = 0;
  for (var i=0; i<preferences.length; i++){
	  var firstElem = preferences[i];
	  var secondElem = preferences[firstElem-1];
	  var thirdElem = preferences[secondElem-1];
  	if (firstElem!==secondElem&&secondElem!==thirdElem&&firstElem!==thirdElem&&thirdElem===(i+1)){
  		quantity++;
  	}
  }
  return quantity/3;
};