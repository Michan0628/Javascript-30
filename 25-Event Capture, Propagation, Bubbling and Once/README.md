## Add event listner on nested elements
```javascript
// select all the divs
const divs = document.querySelectorAll('div');

// handle click to log class name each time

function logName(e){
    console.log(this.classList.value)
}

divs.forEach( div => {
    div.addEventListener('click', logName)
})

// Result:
// three
// two
// one
```
## What heppens when you click on div three?
When you click on the third div, the click event triggers from div three to div two to div one and event on body and html.
 **Bubbling**is the order of browser recoganizes your click event from **inner most** nested element(div three) to the **outer most** element(body).
You don't usually see it because you didn't add listening on mutiple nested elements.

The browser will **capture** your click from **top** of dom tree to the **bottom**, and then start **bubble** from the **bottom** up to the **top** of the tree.

## Capture
```javascript
divs.forEach( div =>{
    div.addEventListener('click', logName, {capture: true})
})
// one
// two 
// three
```

_Capture:true_ will make the function run from the top to the bottom rather than bubble from bottom to the top. It is false by default.

## Stop propagation
```javascript 
function logName(e){
    console.log(this.classList.value)
    e.stopPropagation();
}
```
*stopPropagation()* will stop the bubbling and will not trigger the events on the parents.

## Once
```javascript
divs.forEach( div =>{
    div.addEventListener('click', logName, {
        capture: false,
        once: true
        })
})
// three
// two
// one
```
*Once: true* will let your event only fire once. It will remove the event listener after it is fired. It is helpful if you want user only click on a button once.




