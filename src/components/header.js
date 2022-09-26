import logo from '../static/images/logo.jpg';

const Logo = {
  render: () => (
    `
      <a href="#/home">
        <img class="logo" src=${logo} alt='logo' />
      </a>
    `
  )
};

const Title = {
  render: () => (
    `
      <h1>The Prancing Pony</h1>
    `
  )
};

const Nav = {
  render:() => (
    `
      <nav>
        <ul>
          <li>
            <a href="#/home">Home</a>
          </li>
          <li>
            <a href="#/menu">Menu</a>
          </li>
          <li>
            <a href="#/contact">Contact</a>
          </li>
        </ul>
      </nav>
    `
  )
};

const Header = {
  render: () => (
    `
      <header>
        ${Logo.render()}
        <div class="title-nav">
          ${Title.render()}
          ${Nav.render()}
        </div>
      </header>
    `
  )
}

export default Header;
