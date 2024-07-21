import newElem from "../../../utils/newElem";
import headerCreator from "../../../utils/headerCreator";

const menu = newElem('div', 'menu-container');
const menuHeader = headerCreator('menu-header header-copy', 'menu-title', 'Menu');

const blocksContainer = newElem('div', 'menu-blocks-container');

const blocks = [];

const headers = [
  'Beverages',
  'Sides',
  'Main Dishes'
];

const titles = [
  'Honey Tea',
  'Beary Tea',
  'Toast and Jam',
  'Fresh Fruit',
  'Pancakes',
  'French Toast'
];

const contents = [
  `A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!`,

  `A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. 
  Best served cold, but can be served hot on request.`,

  `A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.`,

  `A small bowl of fresh fruit, whatever we find at the market for the day.`,

  `A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.`,

  `Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.`
];

const prices = [
  '$2',
  '$3',
  '$1',
  '$3',
  '$4',
  '$5'
];

for(let i = 0; i < headers.length; i++) {
  const container = newElem('div', 'menu-block-container');
  const header = headerCreator('menu-block-header header-copy', 'menu-block-title', headers[i]);

  container.appendChild(header);

  blocks.push(container);
}

for(let i = 0; i < 6; i++) {
  const container = newElem('div', 'recet-container');
  const title = newElem('div', 'recet-title');
  const content = newElem('div', 'recet-content');
  const price = newElem('div', 'recet-price');

  const pTitle = newElem('p');
  const pContent = newElem('p');
  const pPrice = newElem('p');

  title.appendChild(pTitle);
  content.appendChild(pContent);
  price.appendChild(pPrice);

  pTitle.textContent = titles[i];
  pContent.textContent = contents[i];
  pPrice.textContent = prices[i];

  container.append(title, content, price);

  if(i <= 1) {
    blocks[0].appendChild(container);
  } else if(i <= 3) {
    blocks[1].appendChild(container);
  } else {
    blocks[2].appendChild(container);
  }
}

blocksContainer.append(blocks[0], blocks[1], blocks[2]);

menu.append(menuHeader, blocksContainer);

export { menu };