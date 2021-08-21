import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../images/book_1.jpg';
import Imgtwo from '../../images/book_2.jfif';
import Imgthree from '../../images/book_3.jfif';
import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <section className="slider" id="home">
        <ul className="slides">
          <li>
            <img src={Imgone} alt="Vacation" />
            <div className="caption center-align">
              <h2>Choose your favorite books</h2>
              <Link to="#" className="btn btn-large purple">Learn More</Link>
            </div>
          </li>
          <li>
            <img src={Imgtwo} alt="Budgets" />
            <div className="caption left-align">
              <h2>Put the books you like</h2>
              <Link to="#" className="btn btn-large purple">Learn More</Link>
            </div>
          </li>
          <li>
          <img src={Imgthree} alt="Getaways" />
            <div className="caption right-align">
              <h2>Relax And Enjoy</h2>
              <Link to="#" className="btn btn-large purple">Learn More</Link>
            </div>
          </li>
        </ul>
        {/* <div id="home" className="carousel carousel-slider center">
          <div className="carousel-fixed-item center">
            <Link className="btn waves-effect white grey-text darken-text-2">button</Link>
          </div>
          <div className="carousel-item red white-text" to="#one!">
            <h2>First Panel</h2>
            <p className="white-text">This is your first panel</p>
          </div>
          <div className="carousel-item amber white-text" to="#two!">
            <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p>
          </div>
          <div className="carousel-item green white-text" to="#three!">
            <h2>Third Panel</h2>
            <p className="white-text">This is your third panel</p>
          </div>
          <div className="carousel-item blue white-text" to="#four!">
            <h2>Fourth Panel</h2>
            <p className="white-text">This is your fourth panel</p>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Banner;