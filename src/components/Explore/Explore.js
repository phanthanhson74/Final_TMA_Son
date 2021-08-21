import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';


class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {title: "Novel", description: "Fiction is a kind of fictitious text that, through characters, situations, and events to reflect the big social picture and problems of human life, manifests narrative quality."},
        {title: "Science", description: "For humans, science has a strange attraction. It not only records the journeys we have gone through, but also opens up new ones.Help us to know more things in life and discover many new."},
        {title: "Children's", description: "Young children love to read, just find a good book, they can sit for hours reading and exploring. Reading books makes them learn new things and helps them develop."},
        {title: "History", description: "History is a science that constantly revises itself on the basis of new archaeological findings, or from forgotten, lost, hidden historical documents for social reasons."}
      ] 
    };
    // this.addCategory = this.addCategory.bind(this)
  }
  // addCategory(){
  //     this.setState({
  //       categories: [...this.state.categories,{title: "Novel", description: "a long work of fictional storytelling with some realism."}]
  //     });
  // }
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="purple-text darken-1">Explore</span> GOOD_BOOK</h4>
              {/* <button onClick={this.addCategory}>add categories</button> */}
            {this.state.categories.map((category) => 
            <div>
              <div className="col s6 m3">
                <div className="card-panel">
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                </div>
              </div>
            </div>
            )}
            {/* <div className="col s6 m3 h-100">
              <div className="card-panel">
                <h4>Novel</h4>
                <p>a long work of fictional storytelling with some realism.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <h4>Science</h4>
                <p>For humans, science has a strange attraction. It not only records the journeys we have gone through, but also opens up new ones. </p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <h4>Children's</h4>
                <p>Young children love to read, just find a good book, they can sit for hours reading and exploring.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <h4>History</h4>
                <p>History is a science that constantly revises itself on the basis of new archaeological findings, or from forgotten, lost, hidden historical documents for social reasons.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;