import Header from './components/header';
import Home from './components/home';
import contact from './components/contact';
import menu from './components/menu';
import './styles/main.css';


const $root = document.getElementById('root');
$root.innerHTML = Header.render();

const $main = document.createElement('main');
$main.innerHTML = Home.render();

$root.appendChild($main);

// const template = document.createElement('template');
// template.innerHTML = Home.render();

// $root.appendChild(template.content.cloneNode(true));

const router = (event) => {
  // $root.insertAdjacentHTML('beforeend', home());
}

window.addEventListener('load', router, false);
window.addEventListener('hashchange', router, false);
