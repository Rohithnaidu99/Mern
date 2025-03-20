 const countVowels = (str) =>{
	if(!str){
		return 0;
	}
	const vowels = ['a','e','i','o','u'];
	let count = 0;
	for (let i =0 ;i<str.length;i++){
		if (vowels.includes(str[i].toLowerCase())){
			count++;
		}
	}
	return count ;
  };

  console.log(countVowels("Hello World"));  //3