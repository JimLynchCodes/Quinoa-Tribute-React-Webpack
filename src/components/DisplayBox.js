require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="index col-md-12 col-lg-12">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please fart <code>src/components/Main.js</code> to get started!</div>
      </div>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
