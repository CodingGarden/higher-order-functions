# 02 - forEach

The `forEach()` method on the Array prototype executes a provided function once for each element in the calling array. `for` loops can often be replaced with a `forEach`. `forEach` is a Higher Order Function.

```js
const numbers = [1, 2, 3, 4, 5];

// Log all the numbers in the array

// With a for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// With a forEach
numbers.forEach((number) => {
  console.log(number);
});
```

The callback function passed into the `forEach` will get called with 3 parameters:

1. The element value
2. The element index
3. The array being traversed

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(number, index, array);
});
```

### References

* [MDN: Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
