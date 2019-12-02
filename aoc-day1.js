
// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?


//** super long and not a very neat solution.. i am aware... =) **


let data = [88093,102524,75875,62024,86072,106670,105440,51371,148951,123704,92364,50848,117125,95022,131085,129886,145084,123077,69219,84366,
51344,65604,140383,53606,132685,83550,76648,120937,137498,84167,94438,54178,106306,80802,98524,70214,114108,118782,75444,76449,144233,
56747,93663,137969,99981,110442,106873,93708,114085,53655,78096,137640,50775,72563,135043,146136,147244,105601,106293,63048,104864,93044,
118222,107110,92725,57424,94602,87898,51668,137651,55070,67255,103823,83059,61150,82029,56060,56702,85486,114522,94121,104870,53014,111776,
63615,78378,113830,80059,123427,73545,93688,122410,93174,131464,137014,114304,138703,54128,111698,84299]

//  part one 

fuelReqSum = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    let addToSum = Math.floor(arr[i]/3)-2
    sum += addToSum
  }
  return sum
}

fuelReqSum(data)

//part two 

let newArr = []

 getNum = (num) => {
  let fuelNum = (Math.floor(num/3))-2
  newArr.push(fuelNum)  
  if(Math.floor(fuelNum/3)-2 > 0){
    getNum(fuelNum)
  }
 }

fuelReqAll = (arr) => {
  let totalSum = 0
  for(let i = 0; i < arr.length; i++){
   getNum(arr[i])
  }
}
final = (arr) => {
  return arr.reduce((a, b)=> a + b, 0)
}

fuelReqAll(data)
console.log(newArr.reduce((a, b)=> a + b, 0) + " THIS IS THE ANSWER")
final(newArr)



//part one answer 3188480
//part two answer 4779847
