const menuClick = (curEl) => {
  const menuItems = document.getElementsByClassName('menu-item');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }

  curEl.classList.add('active');
};

// create node
document.createElement('h1');

const heading = document.createElement('h1');
const body = document.querySelector('body');

body.appendChild(heading);
heading.innerText = 'Hello World';

// Traverse
const subjects = document.querySelector('.subjects');
subjects.firstElementChild;
subjects.lastElementChild;

// remove

subjects.remove;

// const subjects=document.querySelector(".subjects");

console.log(subjects.firstElementChild); // prints first element of list

console.log(subjects.lastElementChild); // prints last element of list

const favSub = document.querySelector('.fav-subject');

console.log(favSub.previousElementSibling); // prints element before favorite subject.

console.log(favSub.nextElementSibling); // prints element after favorite subject

console.log(favSub.parentElement); //prints parent of favorite subject i.e entire list
