import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Gallery.css';
import Resort4 from '../../images/khoahoc_1.jpg';
import Resort5 from '../../images/khoahoc_2.jpg';
import Resort6 from '../../images/khoahoc_3.png';
import Resort7 from '../../images/book_01.jpg';
import Resort8 from '../../images/book_02.jpg';
import Resort9 from '../../images/book_03.jpg';
import Resort10 from '../../images/book_04.jpg';
import Resort11 from '../../images/book_05.jpg';
import Resort12 from '../../images/book_11.jpg';
import Resort13 from '../../images/book_14.jpg';
import Resort14 from '../../images/book_15.jpg';
import Resort15 from '../../images/book_07.jpg';
import { HashLink as Link } from 'react-router-hash-link';


class Gallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        galleties: [
          {img: Resort4, title: "Nguồn Gốc Các Loài", price: "300.000đ"},
          {img: Resort5, title: "Bí ẩn về vũ trụ", price: "250.000đ"},
          {img: Resort6, title: "Lược Sử Thời Gian", price: "399.000đ"},
          {img: Resort7, title: "Mắt Biếc", price: "399.000đ"},
          {img: Resort8, title: "Nhà Giả Kim", price: "399.000đ"},
          {img: Resort9, title: "Bông Cúc Nhỏ", price: "399.000đ"},
          {img: Resort10, title: "Cây Cam Ngọt Của Tôi", price: "399.000đ"},
          {img: Resort11, title: "Vui Vẻ Không Quạo", price: "399.000đ"},
          {img: Resort12, title: "Giải Mã Siêu Trí Nhớ", price: "399.000đ"},
          {img: Resort13, title: "Bán Đắt Giá Báo Nhiêu", price: "399.000đ"},
          {img: Resort14, title: "Tư Duy Sâu", price: "399.000đ"},
          {img: Resort15, title: "Đáp Án Của Thời Gian", price: "399.000đ"}
        ] 
      };
    }
  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="purple-text darken-1">Book </span> Library
          </h4>
          <div className= "row">
          {this.state.galleties.map((gallery) => 
               <div className="col s3 ">
                  <div className="card">
                    <div className="card-image">
                      <img className="images" src={gallery.img} />
                      <span className="card-titles">{gallery.title}</span>
                      <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link>
                    </div>
                    <div className="card-content">
                      <p>{gallery.price}
                      </p>
                    </div>
                  </div>
                </div>
            )}
            </div>
        </div>
      </section>
    );
  }
}

export default Gallery;