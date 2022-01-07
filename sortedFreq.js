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

// start with 2 pointers, one from the begining of the array and the other from the end. I loop for as log the right side is bigger than  the left side. Inside the loop i move each pointer towards the desired number.

// Two possible outcomes can happen either the pointers would reach the first occurance and last occurance of `num` and the third if will return the difference of the right and left side or the two pointers will meet the while loop will stop and it will return -1.
console.log(sortedFrequency([1,1,2,2,2,2,3,],2))//4
console.log(sortedFrequency([1,1,2,2,2,2,3,],3))//1
console.log(sortedFrequency([1,1,2,2,2,2,3,],1))//2
console.log(sortedFrequency([1,1,2,2,2,2,3,],4))//-1


