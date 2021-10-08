import Header from './components/header';
import home from './components/home';
import contact from './components/contact';
import menu from './components/menu';
import './styles/main.css';


const $root = document.getElementById('root');
$root.innerHTML = Header.render();

const router = (event) => {
  // $root.insertAdjacentHTML('beforeend', home());
}

window.addEventListener('load', router, false);
window.addEventListener('hashchange', router, false);
