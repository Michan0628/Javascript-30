# Array Cardio Day 1

## [Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### Sort numbers

1. ascending order

```javascript
const sortNumber = numbers.sort((first, second) => first - second);
```

2. decending order

```javascript
const sortNumber = numbers.sort((first, second) => second - first);
```

### Sort string

1. ascending order

```javascript
// sort last name in ascending order
const sortPeopleLastNameES6 = people.sort((first, second) => {
  const [firstFirstName, firstLastName] = first.split(",");
  const [secondFirstName, secondLastName] = second.split(",");
  return firstLastName < secondLastName ? -1 : 1;
});
```

2. descending order

```javascript
// sort last name in ascending order
const sortPeopleLastNameES6 = people.sort((first, second) => {
  const [firstFirstName, firstLastName] = first.split(",");
  const [secondFirstName, secondLastName] = second.split(",");
  return firstLastName < secondLastName ? 1 : -1;
});
```

## [Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

The reduce() method executes a reducer callback function on each element of the array, resulting in single output value.
Remember to provide the initial value.

### Sum of all numbers in an array

```javascript
const numbers = [0, 1, 2, 3]
const sumOfNumbers.reduce((accumulator, currentItem)=>(
    accumulator + currentItem)
    , 0)
// Result:
// 6
```

### Sum of values in an object array

```javascript
const people = [{name:'Baekhyun', age:28},{name:'Chan', age:24},{name:'Subin', age:21} ]
const sumOfAge.reduce((accumulator, currentItem)=>(
    accumulator + currentItem.age)
    , 0)
// Result:
// 73
```

### Counting number of items in an object

```javascript
const data = ["car", "car","truck","truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck",];
const transportation = data.reduce((object, item)=>{
    if(item in object){
        object[item]++
    }
    else{
        object[item] = 1
    }
    return object
}, { })
// Result:
// {car: 5, truck: 3, bike: 2, walk: 2, van: 2}
```
