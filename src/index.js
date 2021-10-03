import home from './components/home';
import css from './styles/main.css';
import contact from './components/contact';
import menu from './components/menu';
import logo from './static/images/logo.jpg';


const $root = document.getElementById('root');
const $logoDiv = document.createElement('div');
$root.appendChild($logoDiv);
const $logo = document.createElement('img');
$logo.src = logo;
$logo.alt = 'logo';
$logo.className = 'logo';
$logoDiv.appendChild($logo);