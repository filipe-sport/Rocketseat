// createElement
const div = document.createElement('div');
const div1 = document.createElement('div');
const tagP = document.createElement('p');
div.innerText = "<strong>Hello</strong>"
div1.innerHTML = "<strong>Hello</strong>"
tagP.innerHTML = "Hello World"
// append prepend

const body = document.querySelector("body")
body.append(div)
body.append(div1)

body.prepend(tagP)