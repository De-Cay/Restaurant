import PointyHat from '../static/images/PointyHat.jpg';

const Intro = {
  render: () => (
    `
      <div class="intro">
        <h6>Welcome to the most Famous inn of all Middle Earth</h6>
        <h4>The Prancing Pony by Barliman Butterbur</h4>
        <h6>Pride of Bree</h6>
      </div>
      <p>
        Located at the crossroad of the Great East Road and the Greenway. 
        The three stories tall building overlooking hills and forests.
        We have rooms for all size of folks, be it Orcs, Hobbits, Men or 
        The Dark Lord himself.<br/>
        Come in for hot breakfast, lunch or supper. We have variaous
        type of Ale from every part of the middle earth.
        We also have finest weeds from Southfarthing. 
      </p>
    `
  )
}

const Patron = {
  render: () => (
    `
      <div>
        <h4>Our frequent visitors:</h4>
        <img src=${PointyHat} alt="Pointy Hat" />
      </div>
    `
  )
}

const Home = {
  render: () => (
    `
      <article class="home">
        ${Intro.render()}
        ${Patron.render()}
      </article>
    `
  )
} 
export default Home;