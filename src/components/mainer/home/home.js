import headerCreator from "../../../utils/headerCreator";
import newElem from "../../../utils/newElem";

const home = newElem('div', 'home-container');
const blocksContainer = newElem('div', 'blocks-container');

const homeHeader = headerCreator('home-header header-copy', 'home-title', 'Restaurant Page');

const headers = [
  'Jasmir Medina',
  'Hours',
  'Location'
];

const contents = [
  `This restaurant offers outstanding food! 
  The atmosphere and customer service create a woodland-like experience, 
  making it a place I love to revisit time and again.`,

  [
    'Sunday: 8am - 8pm',
    'Monday: 6am - 6pm',
    'Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
    'Saturday: 8am - 10pm'
  ],

  '123 Forest Drive, Forestville, Maine'
];

for(let i = 0; i < 3; i++) {
  const container = newElem('div', 'block-container');
  const head = newElem('div', 'block-header');
  const content = newElem('div', 'block-content');

  const headText = newElem('p');
  headText.textContent = headers[i];
  head.appendChild(headText);

  if(!Array.isArray(contents[i])) {
    const contentText = newElem('p');
    contentText.textContent = contents[i];
    content.append(contentText);
  } else {
    for(let j = 0; j <= contents[i].length; j++) {
      const contentText0 = newElem('p');
      contentText0.textContent = contents[i][j];
      content.append(contentText0);
    }
  }

  container.append(head, content);
  blocksContainer.appendChild(container);
}

home.append(homeHeader, blocksContainer);

export { home };