import newElem from "../../utils/newElem";
import cleanContainer from "../../utils/cleanContainer";

import { lis } from "../navbar/navbar";

import { home } from "./home/home";
import { menu } from "./menu/menu";
import { contact } from "./contact/contact";

const mainer = newElem('div', 'mainer-container');

mainer.appendChild(home);

lis.forEach((target) => {
  target.addEventListener('click', () => {
    const option = target.textContent;
    
    cleanContainer(mainer)

    if(option === 'Menu') mainer.appendChild(menu);
    if(option === 'Home') mainer.appendChild(home);
    if(option === 'Contact') mainer.appendChild(contact);
  });
});

export { mainer };