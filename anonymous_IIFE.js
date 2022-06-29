// a)Print odd numbers in an array:

    const odd = function(arr){
        return arr.filter((num)=>{
            if(num%2==0){
                return false
            }
            return true
        })
    }

    console.log(odd([1,2,3,4,5,6,7,8,9,10]))

    // Program to find odd number using IIFE function

    (function(arr){
        let res = [];
        for(let num in arr){
            if(num%2!==0){
                res.push(num)
            }
        }
        console.log(res)
    })([1,2,3,4,5,6,7,8,9,10])


// b)Convert all the strings to title caps in a string array:

    const titleCaps = function (arr) {
        var newArr = [];
        for(var i=0; i< arr.length; i++) {
            newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
        }
      return newArr.join(" ");
    }
    
    console.log(titleCaps(["i'm","a","Testcase"]));

    // Program using IIFE function

    (function (arr) {
        var newArr = [];
        for(var i=0; i< arr.length; i++) {
            newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
        }
      console.log(newArr.join(" "));
    })(["i'm","a","Testcase"])

// C.Sum of all numbers in an array:

    const sum = function (arr) {
        let sum=0;
     for(i=0;i<arr.length; i++){ 
        sum= sum+arr[i];
     }
     console.log(sum);
    }
     sum ([1,2,3,4,5]);

     // Program using IIFE function

     (function (arr) {
        let sum=0;
     for(i=0;i<arr.length; i++){ 
        sum= sum+arr[i];
     }
     console.log(sum);
    })([1,2,3,4,5])

// D. Return all the prime numbers in an array

    const primeNumber = function (num){
        for(let i=2; i<arr; i++){
            if(num%i===0){
                return false;
            }
        }
        return num>1;
    }
    var array = [-5, -3, -2, -1, ...Array(20).keys()]; 
    console.log(array.filter(primeNumber));

     // Program using IIFE function

     (function (arr) {
        let res = [];
        for (let i=0;i<arr.length;i++){
          if (arr[i]===2){
            res.push(arr[i]);
            continue;
          }
          for (let j=2;j<arr[i];j++){
            if(arr[i] % j==0){
              break;
            }
            if(j===arr[i]-1)
            res.push(arr[i])
          }
        }
        console.log(res);
      })([1,2,3,4,5,6,7,8,9,10]);


// E. Return all the palindromes in an array

    const palindromes = function (arr){
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

    // Program using IIFE function

    (function (arr){
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
    })(["array" , "madam" , "man" , "mom", "dad"]);

//F. Return median of two sorted arrays of same size

const medianOfTwoSortedArrays = function(arr1, arr2){
    let arr = [...arr1,...arr2]
    arr.sort(function(a,b){return a-b})
    let medianIndex = Math.floor(arr.length/2)
    return median= arr.length%2 === 1 ? arr[medianIndex] : (arr[medianIndex-1] + arr[medianIndex])/2

}
console.log(medianOfTwoSortedArrays([1,3,4,5],[2,6,8,7]))

        // Program using IIFE function
    (function(arr1, arr2){
        let arr = [...arr1,...arr2]
        arr.sort(function(a,b){return a-b})
        let medianIndex = Math.floor(arr.length/2)
        let median= arr.length%2 === 1 ? arr[medianIndex] : (arr[medianIndex-1] + arr[medianIndex])/2
        console.log(median)
    })([1,3,4,5],[2,6,8,7])

// G. Remove duplicates from an array

    const removeDuplicate= function(arr){
        let arr1 = [...new Set(arr)]
        console.log(arr1); 
    }
    removeDuplicate([1,2,3,1,3,3,4,5,6,2])

    // Program using IIFE function
    
    (function(arr){
        let arr1 = [...new Set(arr)]
        console.log(arr1); 
    })([1,2,3,1,3,3,4,5,6,2])
    
// H. Rotate an array by k times
    
    const rotate = function(array,k){
        for(let i=0; i<k; i++){
            array.unshift(array.pop())
        }
        console.log(array);
    }
    rotate([1,2,3,4,5], 3);
    
    // Program using IIFE function

    (function(array,k){
        for(let i=0; i<k; i++){
            array.unshift(array.pop())
        }
        console.log(array);
    })([1,2,3,4,5], 3);