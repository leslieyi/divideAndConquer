//write a function which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1

function findRotatedIndex(array, number){
    let start = 0;
    let end = array.length;
    let rotated;
    let middle;
    
    let first = array[start];
    let last = array[end - 1];
    
    while(start < end){
        rotated = Math.floor((start+end)/2);
        if(array[rotated-1] > array[rotated]) break;
        if(array[rotated] >= first && array[rotated] >= last){
            start = rotated+1;
        }else if(array[rotated] <= first && array[rotated] <= last){
            end = rotated;
        }
    }
 
    start = 0;
    end = array.length;
    
    if(number <= last){
        start = rotated;
    }
    if(number >= first){
        end = rotated;
    }
 
    while(start <= end){
        middle = Math.floor((start+end)/2);
        if(array[middle] < number){
            start = middle+1;
        }else if(array[middle] > number){
            end = middle-1;
        }else {
            return middle;
        }
    }
    
    return -1; 
}

console.log(findRotatedIndex([3,4,1,2],4))//1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4],3))//6
console.log(findRotatedIndex([38,57,29,41],3))//-1
