import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(filters){
        this.props.updateFilters(filters);
    }

    render(){
        return (
          <div className="splash-container">
            <div className="splash-section1">
              <img src='./section1-1.jpg' alt="splash-section1" />
              <div className="section1-box">
                <div className="section1-box-sub1">
                  In With
                  <br />
                  The New
                </div>
                <div className="section1-box-sub2">
                  Shake&nbsp;things&nbsp;up&nbsp;with&nbsp;bright&nbsp;colors&nbsp;and
                  <br />
                  fresh&nbsp;takes&nbsp;on&nbsp;classic&nbsp;shapes.
                </div>
                <Link className="nav-link" to="/womens/new" onClick={() => this.handleClick({ gender: "womens", category: "new" })}>Shop New Arrivals</Link>
              </div>
            </div>

            <div className="splash-section2">
              <div className="splash-section2-sub1">
                <Link className="nav-link" to="/womens/clothing" onClick={ () => this.handleClick({ gender: "womens", category: "clothing" })}>
                  <img src='./section2-1.jpg' alt="section2_1" />
                  <div>Getting dressed made extra easy</div>
                  <div>So Many Matching Sets</div>
                </Link>
              </div>
              <div className="splash-section2-sub2">
                <Link className="nav-link" to="/womens/brands" onClick={ () => this.handleClick({ gender: "womens", category: "brands" })}>
                  <div>Easy pairs to wear all season</div>
                  <div>Only The Best Shorts</div>
                  <img src='./section2-2.jpg' alt="section2_2" />
                </Link>
              </div>
              <div className="splash-section2-sub3">
                <Link className="nav-link" to="/womens/shoes" onClick={ () => this.handleClick({ gender: "womens", category: "shoes" })}>
                  <img src='./section2-3.jpg' alt="section2_3" />
                  <div>Your new, go-to slide</div>
                  <div>Meet The Charley Sandal</div>
                </Link>
              </div>
            </div>

            <div className="splash-section3">
              <div className="splash-section3-sub1">
                <img src='./section3-1.png' alt="section3_1" />
              </div>
              <div className="splash-section3-sub2">
                <div className='section3-sub2-title'>Our Latest (Denim) Obsession</div>
                <div className='section3-sub2-subtitle'>Dare to Flare</div>
                <div className='section3-sub2-description'>
                  From subtle to superwide, a '70s-inspired vibe is where it's
                  at. Available in a variety of fits, sizes and in Petite, Tall
                  and Plus.
                </div>
                <Link className="nav-link" to="/womens/denim" onClick={() => this.handleClick({ gender: "womens", category: "denim" })}>
                  Denim
                </Link>
              </div>
            </div>

            <div className="splash-between-label">
              <img src='./labels_we_love.svg' />
              <div>
                Exclusive collabs and curated picks from our favorite brands.
              </div>
            </div>

            <div className="splash-section4">
              <div className="splash-section4-sub1">
                <img src='./section4-1.jpg' alt="section4_1" />
                <div>FETCHWELL x HOTEL MAGIQUE</div>
              </div>
              <div className="splash-section4-sub2">
                <img src='./section4-2.jpg' alt="section4_2" />
                <div>FETCHWELL x TESS GUINERY</div>
              </div>
              <div className="splash-section4-sub3">
                <img src='./section4-3.jpg' alt="section4_3" />
                <div>REISTOR</div>
              </div>
              <div className="splash-section4-sub4">
                <img src='./section4-4.jpg' alt="section4_4" />
                <div>HUMA BLANCO</div>
              </div>
            </div>

            <div className="perks-banner">
              <img src='./perks-banner.png' alt="perks_banner" />
            </div>
          </div>
        );
    }
}

export default Splash;