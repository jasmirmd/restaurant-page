import newElem from "./newElem"

export default function headerCreator(headerName, titleClassname, title) {
  const container = newElem('div', headerName);
  const pTitle = newElem('p', titleClassname);
  
  pTitle.textContent = title;
  container.appendChild(pTitle);
  
  return container;
}