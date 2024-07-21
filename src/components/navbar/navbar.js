import newElem from "../../utils/newElem";

const navbar = newElem('div', 'navbar');
const ul = newElem('ul', 'navbar-btns-container');

const lis = [];

for(let i = 0; i <= 2; i++) {
  const names = ['Home', 'Menu', 'Contact'];
  const li = newElem('li', `link-btn-${i}`);

  li.textContent = names[i];
  lis.push(li);
  ul.append(lis[i]);
}

navbar.appendChild(ul);

export { navbar, lis };