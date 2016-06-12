require('normalize.css/normalize.css');
require('styles/App.css');
require('components/DisplayBoxContainer.js');

import React from 'react';

import DisplatBoxContainerJsComponent from 'components/displayBoxContainer/DisplatBoxContainerJsComponent.js';

let yeomanImage = require('../images/quinoa-godly-light.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index container-fluid">
        <img src={yeomanImage} alt="Yeoman Generator" width="150"/>
        <div className="notice">Jim's React Webpack Composing Components Example!</div>
        <DisplatBoxContainerJsComponent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
