// 1 - Re-write the for loop with a forEach

let numbers_1 = [1, 2, 3, 4, 5];

let sum = 0; // 1. Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < numbers_1.length; i++) {
  const number = numbers_1[i];
  sum += number; // 3. Update the accumulator variable
}

console.log(sum);

// 2 - Re-write the for loop with a forEach

let things = ['shoe', 'table', 'book', 'computer', 'phone'];
let copiedThings = []; // 1. Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < things.length; i++) {
  const thing = things[i];
  copiedThings.push(thing); // 3. Update the accumulator variable
}

console.log(copiedThings);

// 3 - Re-write the for loop with a forEach

let numbers_2 = [1, 2, 3, 4, 5];
let doubledNumbers = []; // 1. Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < numbers_2.length; i++) {
  const number = numbers_2[i];
  doubledNumbers.push(number * 2); // 3. Update the accumulator variable
}

console.log(doubledNumbers);

// 4 - Re-write the for loop with a forEach

let all_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = []; // 1. Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < all_numbers.length; i++) {
  const number = all_numbers[i];
  if (number % 2 === 0) {
    evenNumbers.push(number); // 3. Update the accumulator variable
  }
}

console.log(evenNumbers);