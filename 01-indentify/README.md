# 01 - Identify

Higher order functions are functions that take in a function as an argument, or return a function as a result.

Examples:

`addEventListener` takes in a function as the second argument. The function is NOT invoked immediately. The function will be called by the browser when the event occurs.

```js
document.body.addEventListener('click', () => {
  console.log('The body was clicked!');
});
```

Can also be written as:

```js
const bodyClick = () => {
  console.log('The body was clicked!');
};

document.body.addEventListener('click', bodyClicked);
```

---

The `.then` of a Promise is a higher order function. The function passed to it will be called when the promise is resolved.

```js
fetch('https://www.reddit.com/r/javascript/.json')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  });
```

Can also be written as:

```js
const responseJSON = response => response.json();
const logResult = result => {
  console.log(result);
};

fetch('https://www.reddit.com/r/javascript/.json')
  .then(responseJSON)
  .then(logResult);
```

### References

* [Eloquent JavaScript Chapter 5](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)