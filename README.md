# giftastic

### Overview

*This app draws a series buttons via jquery by iterating through an array. 
*The onclick for each button will trigger an Ajax call to giffy to return the still gif of a single search result of the term of the button value.
*An onclick is then set on the image and will trigger an ajax call for the animated version of that same gif.
*Additional button clicks will draw additional gifs, initially still, animating upon click.

### pain points

*Initially, when clicking one of the buttons, the subsequent picture on click would only fire after the next button click had occurred. *The on click trigger on the most recent gif would never fire. 
*I had presumed that the $(".pictures").on("click" would remain true for newly created elements and did not realize I needed to recall it after the new gif has been created.
