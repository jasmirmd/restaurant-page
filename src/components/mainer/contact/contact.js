import newElem from "../../../utils/newElem"
import headerCreator from "../../../utils/headerCreator"

const contact = newElem('div', 'contact-container');

const contactHeader = headerCreator('contact-header header-copy ', 'contact-title', 'Contact Us');

const contactsContainer = newElem('div', 'contacts-container');

const names = [
  'Gerard',
  'Enrique',
  'Leticia'
];

const ocupations = [
  'Chef',
  'Manager',
  'Waiter'
];

const numbers = [
  '555-555-5554',
  '555-555-5555',
  '555-555-5556'
];

const emails = [
  'totallyRealEmail@notFake.com',
  'perfectlyRealEmail@notFake.com',
  'totallyRealEmail@notFake.com'
];

for(let i = 0; i < 3; i++) {
  const container = newElem('div', 'contact');
  const name = newElem('div', 'contact-name');
  const ocupation = newElem('div', 'contact-ocupation');
  const number = newElem('div', 'contact-number');
  const email = newElem('div', 'contact-email');

  const pName = newElem('p');
  const pOcupation = newElem('p');
  const pNumber = newElem('p');
  const pEmail = newElem('p');

  pName.textContent = names[i];
  pOcupation.textContent = ocupations[i];
  pNumber.textContent = numbers[i];
  pEmail.textContent = emails[i];

  name.appendChild(pName);
  ocupation.appendChild(pOcupation);
  number.appendChild(pNumber);
  email.appendChild(pEmail);

  container.append(name, ocupation, number, email);
  contactsContainer.appendChild(container);
}

contact.append(contactHeader, contactsContainer);

export { contact };