//Given an array o 1s and 0s which has all 1s first followed by all 0s, write a function which returns the number of zeroes in an array. This


function countZeroes(arr, res=0){
    if(arr.length === 0) return res;
    if(arr[0] === 0)  return arr.length;
    const mid = Math.floor(arr.length / 2);
    if(arr[mid] === 0) {
        res += (arr.length - mid); // count zeros from mid to right
        return countZeroes(arr.slice(0, mid), res); //do left side of mid
    }else if(arr[mid] === 1){
        return countZeroes(arr.slice(mid + 1), res); // do right side of mid
    }
}

console.log(countZeroes([1,1,1,0,0]))//2
console.log(countZeroes([1,0,0,0,0]))//5
console.log(countZeroes([1,1,1,1]))//0
console.log(countZeroes([0,0,0]))//3


