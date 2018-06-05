// 01 - Convert the following for loop to a forEach call on the array

// Create the array
const flavors = ['chocolate', 'ginger', 'carrot', 'coffee', 'walnut', 'banana'];

// Create the for loop
// for (let i = 0; i < flavors.length; i++) {
//   console.log('I like ' + flavors[i] + ' cake');
// }

flavors.forEach((flavor) => {
  console.log(`I like ${flavor} cake`);
});

// 02 - Convert the following for loop to a forEach call on the array

const numbers = [2, 4, 6, 8];

// for (let i = 0; i < numbers.length; i++) {
//   console.log('The number', numbers[i], 'is at index', i);
// }

numbers.forEach((number, index) => {
  console.log(`The number ${number} is at index ${index}`);
});

// 03 - Convert the following for loop to a forEach call on the array

const evenNumbers = [2, 4, 6, 8, 10];

// for (let i = 0; i < evenNumbers.length; i++) {
//   evenNumbers[i] = evenNumbers[i] * 2;
// }

evenNumbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

// evenNumbers.forEach((number, index, array) => array[index] = number * 2); // other way to write it

console.log(evenNumbers);

// 04 - Log the name of each product to the page with a forEach call on the products array

let products = [{
  name: 'Running shoes',
  price: 75
}, {
  name: 'Golf shoes',
  price: 85
}, {
  name: 'Dress shoes',
  price: 95
}, {
  name: 'Walking shoes',
  price: 65
}, {
  name: 'Sandals',
  price: 55
}];

products.forEach(product => {
  console.log(product.name);
});

// products.forEach(product => console.log(product.name));

const names = ['Mertcan', 'Ali', 'William', 'Prof Elements', 'quellhorst', 'Robin'];

names.forEach(name => {
  console.log(name);
});
