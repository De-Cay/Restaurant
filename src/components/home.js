import PointyHat from '../static/images/PointyHat.jpg';
import Strider from '../static/images/strider.jpg';
import WitchKing from '../static/images/WitchKing.jpg';

const Intro = {
  render: () => (
    `
      <section class="intro">
        <h6>Welcome to the most Famous inn of all Middle Earth</h6>
        <h4>The Prancing Pony by Barliman Butterbur</h4>
        <h6>Pride of Bree</h6>
        <p>
          Located at the crossroad of the Great East Road and the Greenway. 
          The three stories tall building overlooking hills and forests.
          We have rooms for all size of folks, be it Orcs, Hobbits, Men or 
          The Dark Lord himself.<br/>
          Come in for hot breakfast, lunch or supper. We have variaous
          type of Ale from every part of the middle earth.
          We also have finest weeds from Southfarthing. 
        </p>
      </section>
    `
  )
}

const Patron = {
  render: () => (
    `
      <section>
        <h4>Our frequent visitors:</h4>
        <div class="visitors">
          <img src=${PointyHat} alt="Gandalf smoking" width="300px" title="Gandalf" />
          <img src=${Strider} alt="Strider brooding" width="300px" title="Strider" />
          <img src=${WitchKing} alt="Witch-king screeching" width="300px" title="Witch King" />
        </div>
      </section>
    `
  )
}

const Disclaimer = {
  render: () => (
    `
      <section>
        <h4>Disclaimer:</h4>
        <p>Management isn\`t responsible for your safety while you enjoy your stay!!</p>
      </section>
    `
  )
}

const Home = {
  render: () => (
    `
      <article class="home">
        ${Intro.render()}
        ${Patron.render()}
        ${Disclaimer.render()}
      </article>
    `
  )
} 
export default Home;