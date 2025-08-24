function getKeys(obj) {
    // Using Object.keys() method to get all the keys in the object
    const keys = Object.keys(obj);
  
    return keys;
  }
  
  // Test cases
  const person = {
    name: "John",
    age: 30,
    gender: "male",
    city: "New York",
  };
  
  console.log(getKeys(person));
  console.log(getKeys({})); 