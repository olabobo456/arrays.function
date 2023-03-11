//Question 1

// * Mutating array methods are the methods that change the obbject are the method have been used
// * Non mutating methods do not change the object after the method have been used.

// Examples
// * Mutating methods e.g pop ,push, shift , unshift, splice.
// * Non mutating methods e.g slice , concat, map, filter


// Question 2

let languages = ['C#','JavaScript','Ruby','PHP','Phython'];
languages.push('klotin');
languages.splice(2,0,'Java');
languages.shift();
languages.unshift('Scala','Swift')
languages.splice(3,1,'Go','Rust')

// Question 3 

let fruit = ['apple','mango','banana'];
  function changefruit( fruit){
    fruit[2] = "orange";
    return fruit;
  }
  
  // Answer is Banana

  // Question 4

  let numbers =[ 4,6,8,10,12]
  function maxofnumbers(numbers){
     return Math.max( 4,6,8,10,12)
  }
  let max = maxofnumbers(numbers)
  console.log(max);
  
  //Question 5

  function valTimesIndex(numb){
    return numb.map((val,index) => val*index);
  }

  let numb =[3,4,5];
  let result = valTimesIndex(numb);
  console.log(result);
