function findEvenIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
		const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

		if (leftSum === rightSum) {
			return i;
		}
	}
	return -1;
}
/*
function findEvenIndex(arr) - optional
{
  function sum(arr){
    return arr.reduce(function(a,b){return a+b;},0);
  }
  return arr.findIndex(function(el,i,arr){
    return sum(arr.slice(0, i)) === sum(arr.slice(i+1,arr.length));
  });
}
*/
