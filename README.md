# Jami_Gallery

*clean. minimal. floating gallery that not like you avg instagram page.*

## What is this?

A floating image gallery where your photos literally float around the screen with smooth animations. Click any image to view it fullscreen. That's it. No bloat, no fluff.

<img width="1326" height="828" alt="image" src="https://github.com/user-attachments/assets/a19ee035-b0d7-4e98-a107-4bcbf885aef3" />

## setup (literally 30 seconds)

```
git clone https://github.com/MahraibFatima/Jami_Gallery.git
```

Put your images in `assets/img/` and name them `1.jpg`, `2.jpg`, etc. up to `76.jpg`

Add your background image as `assets/img/mountain range.jpeg` taken from pinterest.

Open `index.html`. Done.

## folder structure
```
├── index.html          # the page
├── style.css           # makes it pretty  
├── script.js           # makes it work
└── assets/
    ├── logo.png
    └── img/
        ├── mountain range.jpeg
        ├── 1.jpg
        ├── 2.jpg
        └── ... (up to 76.jpg)
```

## features that actually matter

- **floating animations** → your images dance around automatically.
- **responsive** → works on phone, tablet, whatever.
- **modal view** → click image = fullscreen mode with cross to exit.
- **no build process** → just HTML/CSS/JS, no webpack drama.
- **76 images max** → change `totalImages` in script.js if you need more/less.
- **lazy loading** → smooth performance even with tons of images.
  
## customization

**Change title:** Edit the `<h1>` in index.html

**Different background:** Replace `mountain range.jpeg`

**More/less images:** Change `totalImages` in script.js

**Different animations:** Mess with the CSS custom properties in style.css

## why this exists

Converted from Astro [repo link](https://silent-lens.vercel.app/) and [website link](https://silent-lens.vercel.app/) because sometimes you just want vanilla HTML that works everywhere without npm hell.

---

*made for myself.*
