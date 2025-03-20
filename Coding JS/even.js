// const sumOfEvens = (arr) => {
// 	let sum = 0;
// 	for (let i=0;i < arr.length; i++){
// 		if (arr[i]%2 == 0){
// 			sum += arr[i];
// 		}
// 	}
//     return sum; 
// };
// console.log(sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3])); //6

 const capitaliseWord = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1);

};

console.log(capitaliseWord("hello")); // Output: 'Hello'
console.log(capitaliseWord("mom")); // Output: 'Mom'
console.log(capitaliseWord("dAD")); //Dad