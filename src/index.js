import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';
import './styles/main.css';


const $root = document.getElementById('root');
$root.innerHTML = Header.render();

const $main = document.createElement('main');
$root.appendChild($main);

const router = (event) => {
  const hashName = event.target.location.hash?.slice(2);
  if (!hashName || hashName === 'home') {
    $main.innerHTML = Home.render();
  } else if (hashName === 'menu') {
    $main.innerHTML = Menu.render();
  } else if (hashName === 'contact') {
    $main.innerHTML = Contact.render();
  }
}

window.addEventListener('load', router, false);
window.addEventListener('hashchange', router, false);
