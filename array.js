let arr = [10,40,500,200,11,30,33,23,63,35,75,25,9,110];
let middle = arr.length /2;

console.log(arr[middle])
console.log(arr[middle+2])

let max =arr[0];
let min =arr[0]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    
    if (max<arr[i]) {
        max =arr[i];
    }

    if (min>arr[i]) {
        min = arr[i]
    }

    if (arr[i] % 2==0) {
        console.log("even number", arr[i])
    }
    else{
        console.log(`odd number ${arr[i]}`)
    }
    
    sum += arr[i];

}
let avarage = Math.floor(sum/arr.length)
console.log(avarage)
console.log(`your max value is ${max}`)
console.log(`your min value is ${min}`)