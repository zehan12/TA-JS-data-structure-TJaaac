// 1. Create an array named numbers and store 5 number values in it

let numbers = [ 3 , 20 , 75 , 90 , 10000 ]

// 2. Calculate the sum of array items and print it to the console using console.log()

function sumOfnum(arry){
 
    let sum = 0;

    for ( let number of arry ) {
        
        sum = sum + number;  
    }
  console.log(sum);
  return sum
}

sumOfnum(numbers);


// 3. Calculate the average of array items and print it to the console using console.log()


function average(arry){
 
    let sum = 0;
    let avg = 0;

    for ( let number of arry ) {
        
        sum = sum + number;  
    }

    avg = sum / arry.length;

    console.log(avg);
    return avg ;
}

average(numbers);

// 4. Find the highest number in the array and print it to the console using console.log()


console.log(Math.min(...numbers));

// 5. Find the lowest number in the array and print it to the console using console.log()


console.log(Math.max(...numbers));

// 6. Find the even numbers in the array and print them to the console using console.log()


function oddnum(arry){
    for ( let number of arry ) {
      if ( number % 2 != 0 ){
         console.log(number);
      }
     }
    }
    oddnum(numbers);

// 7. Find the odd numbers in the array and print them to the console using console.log()


function oddnum(arry){
for ( let number of arry ) {
  if ( number % 2 === 0 ){
     console.log(number);
  }
 }
}
oddnum(numbers);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

function divisible5(arry){
for ( let number of arry ) {
    if ( number % 5 === 0 ){
        console.log(number);
    } 
}
}

divisible5(numbers);

// 9. Log all the element of the array one by one

for ( let number of numbers  ) {
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3


function divisible3(arry){
    for ( let number of arry ) {
        if ( number % 3 === 0 ){
            console.log(number);
        } 
    }
    }
    
    divisible3(numbers);
