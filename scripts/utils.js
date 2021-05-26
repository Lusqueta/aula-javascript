
const uuid = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const regexNumeros = /[0-9]/;
const regexNome = /[a-zA-Z\s]/;

function byId(string) {
  return document.getElementById(string);
}

function getValue(id) {
  return byId(id).value;
}

function setValue(id, value) {
  byId(id).value = value;
}

function setInner(id, text) {
  return byId(id).innerHTML = text;
}

function titlefy(fullName) {
  return fullName.split(' ').map(name =>  {
    return [...name].map((letter, index) => index === 0? letter.toUpperCase() : letter.toLowerCase()).join('');
  }).join(' ');
}



function padZeros(x) {
  let str = x.toString();
  if(str.length < 2)
    str = '0' + str;
  return str;
}

function randInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

function filterInput(text, regex) {
  return [...text].filter(letter => letter.match(regex)).join('');
}

function closeToast(id) {
  const t = byId(id);

  t.classList.add('kill');

  setTimeout(() =>  t.remove(), 1000);
}

function _getToast(text, level){
  const id = uuid();
  return `
  <div id="${id}" onclick='closeToast("${id}")' class='toast-container ${level}'>
    <div class='toast'>
      <div class='icon'>
        <i class="fas fa-bell"></i>
      </div>
      <p class='text'>
        ${text}
      </p>
    </div>
  </div>`
}

function toast(text, level='warning') {
  byId('toast-wrapper').innerHTML += _getToast(text, level);
}