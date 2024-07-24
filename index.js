//MAP
// map() method is used for creating a new array from an exisiting one, applying a function to each one of yhe elements of the first array 


const arr =[1,2,3,4,5];
const mapArr = arr.map(num=>(num +1));
console.log(mapArr);
console.log(arr);



//FILTER
//This is somewhat smilar to map
//it iterates through the array and applies the callback function on every item
//However instead of transforming the values in the array, it returns the original values of the array but will return the ooriginal values only if the callback fucntion returns true
//filter will iterate through the array and pass every value into the isOdd callback fucntion one at a time
//isOdd will return true when the value is odd which means this value is included in the output
//If it’s an even number, isOdd will return false and not include it in the final outpu

const isOdd = (num)=>{
  return num % 2 !== 0
}
const arrays = [1,2,3,4,5,];
const oddNums = arrays.filter(isOdd);
console.log(oddNums); // outputs [1,3,5]
console.log(arr); // outputs [1,2,3,4,5] original array is not affected


//REDUCE
//he reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
//it takes two arguments
//the first argument is the accumulator(which is the current value of the result at that point in the loop) which is either intial value which is set or first element in the array if no initial value is set
//the other argument is the inital value as a second argument(after the callback) this helps when we do not want our initial value to be the firtst element in the array
// In summary in reduce() we are going to do something and pass the iteration to the next item in the array 

const array = [1,2,3,4,5];
const productOfAllNums = array.reduce((total,currentItem)=>{
  return total * currentItem
}, 1);
console.log(productOfAllNums);
console.log(arr);