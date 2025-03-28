# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Preview](./design/desktop-preview.jpg)

### Links

- Live Site URL: [Netlify Page](https://zesty-centaur-a5cbad.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS library

### What I learned

I have learned how to use JS to be able to click and toggle the share link to get display a specific modal for the share links.

```js
function colorChange() {
  // Toggle active class on button and pointer
  button.classList.toggle('active');
  pointer.classList.toggle('active');

  // Toggle modal visibility
  modal.classList.toggle('show-modal');
}
```

### Useful resources

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This helped me to modify the a even easier approach to be able use use the toggle function.

## Author

- GitHub - [mirkozlatunic](https://github.com/mirkozlatunic)
- Frontend Mentor - [@mirkozlatunic](https://www.frontendmentor.io/profile/mirkozlatunic)
