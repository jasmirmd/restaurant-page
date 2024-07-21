export default function cleanContainer(elem) {
  while(elem.firstChild) elem.removeChild(elem.firstChild);
}