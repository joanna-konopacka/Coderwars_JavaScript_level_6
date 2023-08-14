/* Define n!! as
n!! = 1 * 3 * 5 * ... * n if n is odd,
n!! = 2 * 4 * 6 * ... * n if n is even.
Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.
For a positive integer n, please count how many zeros are there at the end of n!!.
Example:
30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30 
30!! = 42849873690624000 (3 zeros at the end)
*/

function countZeros(n) {
    let nElements = [];
    let result = 0;
  
    if (n % 2 !== 0) {
      for (let i = 1; i <= n; i += 2) {
        nElements.push(i);
      }
    } else {
      for (let i = 2; i <= n; i += 2) {
        nElements.push(i);
      }
    }
  
    let nResult = nElements.reduce((curr, acc) => curr * acc, 1);
  
    while (nResult % 10 === 0) {
      result++;
      nResult = nResult / 10;
    }
  
    return result;
  }

  