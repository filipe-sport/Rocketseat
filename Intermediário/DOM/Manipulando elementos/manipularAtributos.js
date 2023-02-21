const header = document.querySelector("header")
header.setAttribute("id", "header")

const headerID = document.querySelector("#header");
console.log(headerID)

const getAttribute = headerID.getAttribute("class")
console.log(getAttribute);

// header.removeAttribute("id") ao descomentar essa linha remove-se o id no DevTools na tag header
