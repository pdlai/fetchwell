import React from 'react';
import { Link } from 'react-router-dom';
import Section1_1 from '/app/assets/images/section1-1.jpg'
import Section2_1 from '/app/assets/images/section2-1.jpg';
import Section2_2 from '/app/assets/images/section2-2.jpg';
import Section2_3 from '/app/assets/images/section2-3.jpg';
import Section3_1 from '/app/assets/images/section3-1.png';
import Section4_1 from '/app/assets/images/section4-1.jpg';
import Section4_2 from '/app/assets/images/section4-2.jpg';
import Section4_3 from '/app/assets/images/section4-3.jpg';
import Section4_4 from '/app/assets/images/section4-4.jpg';
import PerksBanner from '/app/assets/images/perks-banner.png';

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
              <img src={Section1_1} alt="splash-section1" />
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
                <Link
                  className="nav-link"
                  to="/womens/new"
                  onClick={() =>
                    this.handleClick({ gender: "womens", category: "new" })
                  }
                >
                  Shop New Arrivals
                </Link>
              </div>
            </div>

            <div className="splash-section2">
              <div className="splash-section2-sub1">
                <img src={Section2_1} alt="section2_1" />
                <div>Getting dressed made extra easy</div>
                <div>So Many Matching Sets</div>
              </div>
              <div className="splash-section2-sub2">
                <div>Easy pairs to wear all season</div>
                <div>Only The Best Shorts</div>
                <img src={Section2_2} alt="section2_2" />
              </div>
              <div className="splash-section2-sub3">
                <img src={Section2_3} alt="section2_3" />
                <div>Your new, go-to slide</div>
                <div>Meet The Charley Sandal</div>
              </div>
            </div>

            <div className="splash-section3">
              <div className="splash-section3-sub1">
                <img src={Section3_1} alt="section3_1" />
              </div>
              <div className="splash-section3-sub2">
                <div>Our Latest (Denim) Obsession</div>
                <div>Dare to Flare</div>
                <div>
                  From subtle to superwide, a '70s-inspired vibe is where it's
                  at. Available in a variety of fits, sizes and in Petite, Tall
                  an Plus.
                </div>
                <Link
                  className="nav-link"
                  to="/womens/clothing/jeans"
                  onClick={() =>
                    this.handleClick({
                      gender: "womens",
                      category: "clothing",
                      subcategory: "jeans",
                    })
                  }
                >
                  Denim
                </Link>
              </div>
            </div>

            <div className="splash-between-label">
              <div>Labels We Love</div>
              <div>
                Exclusive collabs and curated picks from our favorite brands.
              </div>
            </div>

            <div className="splash-section4">
              <div className="splash-section4-sub1">
                <img src={Section4_1} alt="section4_1" />
                <div>MADEWELL x HOTEL MAGIQUE</div>
              </div>
              <div className="splash-section4-sub2">
                <img src={Section4_2} alt="section4_2" />
                <div>MADEWELL x TESS GUINERY</div>
              </div>
              <div className="splash-section4-sub3">
                <img src={Section4_3} alt="section4_3" />
                <div>REISTOR</div>
              </div>
              <div className="splash-section4-sub4">
                <img src={Section4_4} alt="section4_4" />
                <div>HUMA BLANCO</div>
              </div>
            </div>

            <div className="perks-banner">
              <img src={PerksBanner} alt="perks_banner" />
            </div>
          </div>
        );
    }
}

export default Splash;