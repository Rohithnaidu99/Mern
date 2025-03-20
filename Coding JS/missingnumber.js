// const missingNumber = nums => {
//     const n = nums.length ;
//     let sum = n *(n +1) /2 ;
//     for ( let num of nums){
//         sum -= num;
//     }
//     return sum ;
// }
// console.log(missingNumber([3, 0, 1]));

//ES6 synatx
const missingNumber = nums => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};
console.log(missingNumber([3, 0, 1]));