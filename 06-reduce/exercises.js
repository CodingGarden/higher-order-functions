const numbers = [1, 2, 3, 4, 5, 6];
// Create a number that is the sum of all the numbers in the array
const sum = numbers.reduce((sum, number) => {
  sum = number + sum;
  return sum;
}, 0);
console.log(sum);

const fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
// Create an object with the fruit as a key and the number of occurences of that fruit as a value
const fruitSightings = fruits.reduce((fruitStock, fruit) => {
  // check if the current fruit is a property in fruitStock // hasOwnProperty
  if (fruitStock.hasOwnProperty(fruit)) {
    fruitStock[fruit]++;   // increment the value at the given fruit property in fruitStock
  } else {
    fruitStock[fruit] = 1; // add the property to fruitStock and set the value to 1
  }
  return fruitStock;
}, {});

console.log(fruitSightings);


/* 
{
  banana: 1,
  cherry: 1,
  orange: 1,
  apple: 1
}
*/

// const things = {
//   banana: 3,
//   cherry: 2,
//   apple: 2
// };

// how can we check if banana is a property in things????


const prices = [29.76, 41.85, 46.5];
// Create a number that is the average price of all the prices in the array

const priceSum = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(priceSum / prices.length);


const averagePrice = prices.reduce((average, price, index, array) => {
  const newAverage = average + price / array.length;
  return newAverage;
}, 0);

console.log(averagePrice);

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with the first 3 letters of each day
const shortDays = days.reduce((shorten, day) => {
  const firstThree = day.substring(0, 3);
  shorten.push(firstThree);
  return shorten;
}, []);
console.log(shortDays);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// create a new array with only the words with a length longer than 6

const longWords = words.reduce((longWord, word)=> {
  if (word.length > 6) {
    longWord.push(word);
  }
  return longWord;
}, []);

console.log(longWords);


const people = [{
  id: 1,
  first_name: 'CJ',
  last_name: 'R.'
}, {
  id: 2,
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  id: 3,
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  id: 4,
  first_name: 'Douglas',
  last_name: 'Crockford'
}];
// Create an object where the keys are the id and the values are the people

const peopleById = people.reduce((byId, person) => {
  // add a property on byId, where the key is person.id and the value is person
  byId[person.id] = person;
  return byId;
}, {});

console.log(peopleById);


/* 

{
  1: { ... },
  2: { ... }
}

*/

const animals = [{
  name: 'cat',
  size: 'small'
}, {
  name: 'dog',
  size: 'small'
}, {
  name: 'lion',
  size: 'medium'
}, {
  name: 'elephant',
  size: 'big'
}];
// Create an object where the keys are the size and the values are an array of all animals that size

const animalsBySize = animals.reduce((bySize, animal) => {
  // does bySize have a property that is the current animal size
  if (!bySize.hasOwnProperty(animal.size)) {
    // if not set the size property on bySize to be an empty array
    bySize[animal.size] = [];
  }

  // push animal into array in bySize at the given animal size 
  bySize[animal.size].push(animal);
  return bySize;
}, {});

console.log(animalsBySize);


/*

{
  small: [],
  medium: [],
  big: []
}

*/
