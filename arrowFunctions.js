// a)Print odd numbers in an array:

const odd = (arr) =>{
    return arr.filter((num)=>{
        if(num%2==0){
            return false
        }
        return true
    })
}

console.log(odd([1,2,3,4,5,6,7,8,9,10]))

// b)Convert all the strings to title caps in a string array:

    const titleCaps = (arr)=> {
        var newArr = [];
        for(var i=0; i< arr.length; i++) {
            newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
        }
      return newArr.join(" ");
    }
    
    console.log(titleCaps(["i'm","a","Testcase"]));

//  C.Sum of all numbers in an array:

    const sum = (arr)=> {
        let sum=0;
     for(i=0;i<arr.length; i++){ 
        sum= sum+arr[i];
     }
     console.log(sum);
    }
     sum ([1,2,3,4,5]);

// D. Return all the prime numbers in an array

const primeNumber = (num)=>{
    for(let i=2; i<arr; i++){
        if(num%i===0){
            return false;
        }
    }
    return num>1;
}
var array = [-5, -3, -2, -1, ...Array(20).keys()]; 
console.log(array.filter(primeNumber));

// E. Return all the palindromes in an array

const palindromes = (arr)=>{
    var narr = arr.filter((item)=>{
        var revarr, temp;
        arr =item.split("");
        
        for(let i=0; i<arr.length/2; i++){
            temp =arr[i];
            arr[i]=arr[arr.length-1-i];
            arr[arr.length-1-i]=temp;
        }
        revarr = arr.join("");
        if(revarr===item)
    return revarr;
        
    })
    console.log(narr);
};
palindromes(["array" , "madam" , "man" , "mom", "dad"])