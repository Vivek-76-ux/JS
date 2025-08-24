function filterLongStrings(arr) {
    let filteredArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 5) {
        filteredArr.push(arr[i]);
      }
    }
  
    return filteredArr;
  }
  
  console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); 
  console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); 
  console.log(filterLongStrings(["car", "bike", "bus", "train"])); 
  
  console.log(filterLongStrings(["123456", "123", "123456789"])); 
  
  console.log(filterLongStrings([])); 