'use strict';

import React from 'react';

require('styles/displayBox/DisplayBoxJs.scss');
let cookedUncookedImage = require('../../images/cooked-uncooked.png');
let hotYogaChickImage = require('../../images/hot-chick-doing-yoga-in-the-street.png');
let landscapeImage = require('../../images/Lanscape_with_Chenopodium_quinoa_Cachilaya_Bolivia_Lake_Titicaca.png');

class DisplayBoxJsComponent extends React.Component {
  render() {

    if (this.props.defaultText == 'values') {

      return (
        <div className="displayboxjs-component">
          <div className="row">

            <div className="col-md-5">
              <img src={cookedUncookedImage} alt="Yeoman Generator" className="img-responsive box-image"/>
            </div>
            <div className="col-md-7">
              <h1>Easy To Prepare</h1>
            </div>
              <p>Quinoa is an amazing food that looks similar to cous cous when cooked.
              Simply boil water, then turn down the heat and add quinoa. Simmer for about 15 min,
              and you'll have some hot, delicious quinoa! Serve as a side dish or substitute
              for rice.</p>

          </div>

        </div>
      );
    } else if  (this.props.defaultText == 'hey') {
     return (

        <div className="displayboxjs-component">
        <div className="row">

          <div className="col-md-5">
            <img src={hotYogaChickImage} alt="Yeoman Generator" className="img-responsive box-image"/>
          </div>
          <div className="col-md-7 display-box-text">
            <h1>Crazy Healthy</h1>
          </div>
            <p>Quinoa is one of the best carbohydrates you could eat. It is easily digestible, gluten free,
            and contains all 9 basic amino acids, making it a complete protein. A serving of quinoa also contains iron, lysine, magnesium, B2, and manganese.</p>
        </div>


      </div>
     )
    } else if  (this.props.defaultText == 'yo yo') {
        return (

          <div className="displayboxjs-component">
            <div className="row">

              <div className="col-md-5">
                <img src={landscapeImage} alt="Yeoman Generator" className="img-responsive box-image"/>
              </div>
              <div className="col-md-7">
                <h1>Interesting Agriculture</h1>
              </div>
                <p>Quinoa is a very interesting crop because it only grows well in cold, rocky climates.
                  It Quinoa originated in the Andean region of Peru, Bolivia, Ecuador, Colombia and Chile,
                  and is also be grown in parts of Canada.
                </p>
            </div>

            </div>

        )
    } else {
      return null;
    }

  }

}

DisplayBoxJsComponent.displayName = 'DisplayBoxDisplayBoxJsComponent';

// Uncomment properties you need
DisplayBoxJsComponent.propTypes = {
  defaultText: React.PropTypes.string
};
DisplayBoxJsComponent.defaultProps = {
  defaultText:"default"
};

export default DisplayBoxJsComponent;
