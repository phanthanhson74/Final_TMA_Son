import React, { Component } from 'react';
import Resort1 from '../../images/book_5.jpg';
import Resort2 from '../../images/book_6.jpg';
import Resort3 from '../../images/book_7.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventures: [
        {img: Resort1, title: "Đắc Nhân Tâm", description: "This is the only book in the self-help genre and has been at the top of the bestseller list voted by The New York Times for 10 years in a row. The first and best book of all time. They have a life-changing impact on millions of people around the world.Need to understand and care about the people.", note: "Đắc Nhân Tâm"},
        {img: Resort2, title: "Nhà Giả Kim", description: "The alchemist seemed to be narrating a conversation with himself. The book has shown the simplest but most profound things in life, only when you read the book can you realize it.", note: "Nhà Giả Kim"},
        {img: Resort3, title: "Bắt Trẻ Đồng Xanh", description: "This is a nice and thin little book unlike the thick books with many chapters. The work has given readers a look through the mind of a young man who looks at life in a humorous and extremely intelligent way.", note: "Bắt Trẻ Đồng Xanh"}
      ] 
    };
  }
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="purple-text darken-1">GOOD_BOOK</span> Adventures</h4>
              {this.state.adventures.map((adventure) => 
            <div>
              { <div className="col s12 m4">
                <div className="card">
                <div className="card-image">
                  <img src={adventure.img} />
                  <span className="card-title">{adventure.title}</span>
                  {/* <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link> */}
                </div>
                <div className="card-content">
                  <p>{adventure.description}
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">{adventure.note}<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this book</p>
                </div>
                </div>
              </div>}
            </div>
            )}
            {/* <div className="col s12 m4"> */}
              {/* <div className="card">
                <div className="card-image">
                  <img src={Resort1} alt="" />
                  <span className="card-title">Đắc Nhân Tâm</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>This is the only book in the self-help genre and has been at the top of the bestseller list voted by The New York Times for 10 years in a row. The first and best book of all time. They have a life-changing impact on millions of people around the world.Need to understand and care about the people.
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Đắc Nhân Tâm<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this book</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort2} alt="" />
                  <span className="card-title">Nhà Giả Kim</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>The alchemist seemed to be narrating a conversation with himself. The book has shown the simplest but most profound things in life, only when you read the book can you realize it. 
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Nhà Giả Kim<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this book</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Resort3} alt="" />
                  <span className="card-title">Bắt trẻ đồng xanh</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>This is a nice and thin little book unlike the thick books with many chapters. The work has given readers a look through the mind of a young man who looks at life in a humorous and extremely intelligent way.
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Bắt trẻ đồng xanh<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this book</p>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-3">
                <i className="material-icons left">send</i> Contact For Booking
              </a>
            </div>
          </div> */}
      </section>
    );
  }
}

export default Popular;