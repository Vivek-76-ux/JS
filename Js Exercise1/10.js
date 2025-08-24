function findCommonElements(arr1, arr2) {
    let commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    commonElements.sort((a, b) => a - b);
  
    return commonElements;
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(arr1, arr2);
  console.log(commonElements); 