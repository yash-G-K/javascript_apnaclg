// array Methods in js
// foreach method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number);
});

let arr = [{
    name: 'apple',
    color: 'red'
}, {
    name: 'banana',
    color: 'yellow'
}, {
    name: 'cherry',
    color: 'red'
}];
arr.forEach((fruits) => {
    console.log(fruits.name, fruits.color);
});

// Map method
// map method creates a new array populated with the results of calling a provided function on every element in the calling array.
let array = [1, 2, 3, 4, 5];
let double = array.map((num) => {
    return num * 2;
});
console.log(double); // [2,4,6,8,10]

// Filter method
// filter method creates a new array with all elements that pass the test implemented by the provided function.if the function returns true, the element is included in the new array. and if it returns false, the element is excluded.
let nums = [10, 15, 20, 25, 30, 35, 40];
let ans = nums.filter((nums) => {
 if (nums % 2 === 0) {
        return true;
    } else {
        return false;
    }
})   
console.log(ans); // [10,20,30,40]

// Every method
// every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let values = [2, 4, 6, 8, 10];
let allEven = values.every((value) => {
    return value % 2 === 0;
});
console.log(allEven); // true

//Some method
// some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let val = [1, 3, 5, 6, 7];  
let hasEven = val.some((value) => {
    return value % 2 === 0;
}); 
console.log(hasEven); // true


// Reduce method
// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let values1 = [1, 2, 3, 4, 5];
let sum = values1.reduce ((sum, value) => {
    return (sum + value);
});
console.log(sum); // 15