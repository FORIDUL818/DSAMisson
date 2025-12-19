// linearSearch start
function linearSearch(target,arr) {
    let len =arr.length; 
    
    for (let i = 0; i < len; i++) {
        
        if (arr[i] === target) {
            if (arr[i]) {
                return ` your data is found ${arr[i]} index ${i}`
            }else {
                return ` something is rong `
            }
        }
        
    }
    
}

let arr = [20,22,4,34,2,5,21,342,23,5,213,34];
let target=342;

let result = linearSearch(target,arr);
console.log(result)
// linearSearch end

// binary search start

function binarySearch (target,arr) {
    let start = 0;
    let end = arr.length -1 ;

    while (start <= end) {
        let mid =Math.floor((start +end)/2);

        if (arr[mid] === target) {
            return `  index is ${mid}`
        }
        else if (arr[mid] < target) {
            start =mid + 1;
        }
        else{
            end =mid - 1
        }
    }
}

  
   let target2=34;
   let arr2 = [20,22,4,34,2,5,21,342,23,5,213,34];

   let result2 = binarySearch(target2 ,arr2);
  console.log( "your data", result2 )
// binary search end
