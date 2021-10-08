import logo from '../static/images/logo.jpg';
const $header = document.createElement('header');


const $logo = document.createElement('img');
$logo.src = logo;
$logo.alt = 'logo';
$logo.className = 'logo';
$header.appendChild($logo);

const $headingText = document.createElement('h1');
$headingText.textContent = 'The Prancing Pony';
$header.appendChild($headingText);

export default $header;
