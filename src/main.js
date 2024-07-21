import './base.css';

import { navbar } from './components/navbar/navbar';
import { mainer } from './components/mainer/mainer';
import { footer } from './components/footer/footer';

const app = document.querySelector('.app');

app.append(navbar, mainer, footer);