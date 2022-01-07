//given a sorted array and a number write a function that counts the occurences of the number in the array

function sortedFrequency(arr, num){
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
        if(arr[left] < num) left++;
        if(arr[right] > num) right--;
        if(arr[left] === num && arr[right] === num) return (right - left) + 1; 
    }
    
    return -1
}
console.log(sortedFrequency([1,1,2,2,2,2,3,],2))//4
console.log(sortedFrequency([1,1,2,2,2,2,3,],3))//1
console.log(sortedFrequency([1,1,2,2,2,2,3,],1))//2
console.log(sortedFrequency([1,1,2,2,2,2,3,],4))//-1


