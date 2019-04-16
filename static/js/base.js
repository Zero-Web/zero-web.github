
let addClass = (el, className) => {
  el.classList.add(className);
}

let removeClass = (el, className) => {
  el.classList.remove(className)
}
  
let toggleClass = (el, className) => {
  el.classList.toggle(className)
}

let hasClass = (el, className) => {
  return el.classList.contains(className)
}
