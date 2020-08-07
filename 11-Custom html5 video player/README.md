# Custom HTML5 Video Player

## Get full screen and exit full screen with JavaScript

How to toggle an element into full screen and exit full screen? We can use the fullscreen API to achieve this.  

### Fullscreen API

- element.requestFullscreen(  ): place the element into full screen mode.

- document.exitFullscreen(  ): switch from full screen mode back to window mode.

- document.fullscreenElement property tells you if the element is in full screen mode.

- fullscreenchange: fire when it transition into or out of full-screen mode.

### Example

```javascript 
// select the button
const fullScreenButton = player.querySelector('.player__fullScreen')

function toggleFullScreen(){
    
    // If the player is in full screen, exit to window mode
    if (document.fullscreenElement) {
        document.exitFullscreen()
        fullScreenButton.innerHTML = '<img src="fullScreen.png" alt="full screen button">'
    }else{
        // If the player is window mode, go to full screen
        player.requestFullscreen()
        fullScreenButton.innerHTML = '<img src="normalScreen.png" alt="full screen button">'
    }
}

// add event listener
fullScreenButton.addEventListener('click', toggleFullScreen)
```