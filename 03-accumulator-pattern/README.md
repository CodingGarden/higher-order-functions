# 03 - The Accumulator Pattern

A common programming "pattern" is to iterate over an array, accumulating a value as we go. This pattern is commonly used to sum the numbers in an array, or to build a new array based on an existing array.

There are 3 parts of the accumulator pattern:

1. Initialize an "accumulator" variable to an initial value
2. Iterating over an array
3. Updating the accumulator variable on each iteration

## Examples

```js
let numbers_1 = [1, 2, 3, 4, 5];

let sum = 0; // 1. Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < numbers_1.length; i++) {
  const number = numbers_1[i];
  sum += number; // 3. Update the accumulator variable
}

console.log(sum);
```

```js
let numbers_2 = [1, 2, 3, 4, 5];
let doubledNumbers = []; // 1. Initialize accumulator variable

// 2. Iterate over an array
for (let i = 0; i < numbers_2.length; i++) {
  const number = numbers_2[i];
  doubledNumbers.push(number * 2); // 3. Update the accumulator variable
}

console.log(doubledNumbers);
```