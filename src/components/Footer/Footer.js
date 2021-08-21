import React, { Component } from 'react';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    footers: [
      {title: "Chat"},
      {title: "bookmark"},
      {title: "Setting_phone"},
      {title: "Send"}
    ],
    footerus: [
      {title: "Follow Us" , description: "Check out on social media for special offers."}
    ]
  };
}
  render() {
    return (
      <div>
        <div className="fixed-action-btn">
          <Link className="btn-floating btn-large blue darken-1">
            <i className="large material-icons">mode_edit</i>
          </Link>
          {this.state.footers.map((footer) => 
            <div>
              <ul>
                <li><Link className="btn-floating red"><i class="material-icons">{footer.title}</i></Link></li>
                <li><Link className="btn-floating yellow darken-3"><i class="material-icons">{footer.title}</i></Link></li>
                <li><Link className="btn-floating green"><i class="material-icons">{footer.title}</i></Link></li>
                <li><Link className="btn-floating blue"><i className="material-icons">{footer.title}</i></Link></li>
              </ul> 
            </div>
            )}
          {/* <ul>
            <li><Link className="btn-floating red"><i class="material-icons">chat</i></Link></li>
            <li><Link className="btn-floating yellow darken-3"><i class="material-icons">bookmark</i></Link></li>
            <li><Link className="btn-floating green"><i class="material-icons">settings_phone</i></Link></li>
            <li><Link className="btn-floating blue"><i className="material-icons">send</i></Link></li>
          </ul> */}
        </div>
        <div className="section purple darken-2 white-text center">
        <div className="row">
          {this.state.footerus.map((footeru) =>
            <div className="col s12">
              <h4>{footeru.title}</h4>
              <p>{footeru.description}</p>
              <Link to="htttps://facebook.com" target="_blank" className="white-text">
                <i className="fab fa-facebook fa-3x"></i>
              </Link>
              <Link to="htttps://twitter.com" target="_blank" className="white-text">
                <i className="fab fa-twitter fa-3x"></i>
              </Link>
              <Link to="htttps://linkedin.com" target="_blank" className="white-text">
                <i className="fab fa-linkedin fa-3x"></i>
              </Link>
              <Link to="htttps://googleplus.com" target="_blank" className="white-text">
                <i className="fab fa-google-plus fa-3x"></i>
              </Link>
              <Link to="htttps://pinterest.com" target="_blank" className="white-text">
                <i className="fab fa-pinterest fa-3x"></i>
              </Link>
            </div>
          )}
        </div>
        </div>
      </div>
    );
  }
}

export default Footer;