function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumOfNumbers(10)); 
  console.log(sumOfNumbers(1)); 
  console.log(sumOfNumbers(5)); 
  console.log(sumOfNumbers(0)); 
  console.log(sumOfNumbers(-5)); 