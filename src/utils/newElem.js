export default function newElem(tag, className = null) {
  const elem = document.createElement(tag);

  if(className) elem.setAttribute('class', className);

  return elem;
}