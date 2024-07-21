import newElem from "../../utils/newElem";

const footer = newElem('div', 'footer');
const footerText = `<p class="footer-text">Made with love by <a class="footer-link" href="https://github.com/jasmirmd" target="_blank" rel="noopener noreferrer">Jasmir Medina</a> :3</p>`

footer.innerHTML = footerText;

export { footer };