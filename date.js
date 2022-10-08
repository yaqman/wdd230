const fulldate = document.querySelector('#currentdate');
currentdate.textContent = document.lastModified;

const currentyear = document.querySelector('#currentyear');
currentyear.textContent = new Date().getFullYear();
