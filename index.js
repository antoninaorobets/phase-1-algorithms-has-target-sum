function hasTargetSum(array, target) {
  for (let i = 0; i < array.length -1; i++) {
      for (let j = i+1; j < array.length; j++){
        if(array[i] + array[j] === target) {
          return true
        }
      }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  взять певые эелент,
  слодить его с каждым следкющим в строке
  если сумма човпала выйти с тру
  если нет вконце вернуть фалс

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([20, 4, 25], 25));

  console.log("");
  
  console.log("Expecting: false ");
  console.log("=>", hasTargetSum([25, 19, 0, 6, 30], 2));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
