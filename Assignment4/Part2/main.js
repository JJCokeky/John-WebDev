const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];



/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg' : 'close up image of eye',
    'pic2.jpg' : 'sandstone',
    'pic3.jpg' : 'purple and white flowers',
    'pic4.jpg' : 'old Egyption painting ',
    'pic5.jpg' : 'butterfly on green leaf'
}

/* Looping through images */

for (const i of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${i}`);
newImage.setAttribute('alt', `altText/${i}`);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', x => {
    displayedImage.src = x.target.src;
    displayedImage.alt = x.target.alt;
})
}

/* Wiring up the Darken/Lighten button */

