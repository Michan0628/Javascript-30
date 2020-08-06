# Array Cardio Day 1

## Array.prototype.find()
Array.find() can take in a callback function, it will return the **value** of the **first** element that satisfies the provided callback fuction in the provided array.

#### Find prime number in array
```javascript
 const findPrime = (number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
          return number > 1;
        }
      };
  console.log([4, 5, 8, 12].find(findPrime)); // 5
  console.log([4, 6, 8, 20].find(findPrime)); // undefined
```

## Array.prototype.some() 
Array.some() take in a callback function, check if there exist **any** element satisfies the provided callback function in the provided array, it will return true or false.

## Array.prototype.every() 
Array.every() is similar to array.some(), but it checks if **every** element in provided array statisfies the callback function, it will return true or false.

## Array.prototype.findIndex() 
Array.findIndex() is similar to array.indexOf(). FindIndex take in a callback function, and it will look for the **first** element in the array that satisfies the callback function, it will return the **index** of that element. If no element passed the test of callback function, it will return **-1**.
IndexOf takes a element, it will return the **first** element's **index** which matches the value of provided element. If the element can not be found, it will return** -1**.

