var throttle = require('lodash.throttle');

const feedbackFormEl = document.querySelector(".feedback-form");
const inputFormEl = document.querySelector("input");
const textareaFormEl = document.querySelector("textarea");
const localeNameKey = "feedback-form-state";

const objectValueForm = { 
}

const savedLocaleNameKey = localStorage.getItem(localeNameKey);
const parsedLocaleNameKey = JSON.parse(savedLocaleNameKey);

// 2
function autocompleteFields() {
    inputFormEl.value = parsedLocaleNameKey.email;
    textareaFormEl.value = parsedLocaleNameKey.message;
} 

if (localStorage.getItem(localeNameKey)) {
    autocompleteFields()
}

// 1
function saveFormValue(evn) {
    evn.preventDefault();
    if (evn.target.nodeName === "INPUT") {
        objectValueForm.email = evn.target.value;
    } 

    if (evn.target.nodeName === "TEXTAREA") {
        objectValueForm.message = evn.target.value;
     }
    
    localStorage.setItem(localeNameKey, JSON.stringify(objectValueForm));
}

// 4
feedbackFormEl.addEventListener("input", throttle(saveFormValue, 500))


// 3
const submitClick = feedbackFormEl.addEventListener("submit", removeLocaleStorage);

function removeLocaleStorage(e) {
    e.preventDefault();
    localStorage.removeItem(localeNameKey);

    inputFormEl.value = "";
    textareaFormEl.value ="";
    console.log(objectValueForm)
}