function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  console.log(isValidEmail("pgupta@duck.com")); // false
  console.log(isValidEmail("example@example.com")); // true
  console.log(isValidEmail("example.example@example.com")); // true
  console.log(isValidEmail("example-example@example.com")); // true
  console.log(isValidEmail("example@example.co.in")); // true
  console.log(isValidEmail("example123@example.com")); // true
  console.log(isValidEmail("example@.com")); // false
  console.log(isValidEmail("example@example.")); // false
  console.log(isValidEmail("example@examplecom")); // false
  console.log(isValidEmail("example@examplecom.")); // false
  console.log(isValidEmail("example@.com.")); // false