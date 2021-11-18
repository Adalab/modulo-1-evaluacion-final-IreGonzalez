'use strict';

const text = document.querySelector('.js_formText');
const counter = document.querySelector('.js_counter');

function textCounter(ev) {
    let textNumber = ev.currentTarget.value.length;
    console.log(textNumber);
    counter.innerHTML = textNumber;
}
text.addEventListener('keydown', textCounter);
text.addEventListener('keyup', textCounter);

text.addEventListener('keydown', function (e) { console.log('keydown', e.currentTarget.value.length); });
text.addEventListener('keyup', function (e) { console.log('keyup', e.currentTarget.value.length); });
text.addEventListener('keypress', function (e) { console.log('keypress', e.currentTarget.value.length); });
text.addEventListener('change', function (e) { console.log('change', e.currentTarget.value.length); });