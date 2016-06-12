'use strict';

import React from 'react';
import DisplayBoxJsComponent from 'components/displayBox/DisplayBoxJsComponent.js'

require('styles/displayBoxContainer/DisplatBoxContainerJs.scss');


class DisplatBoxContainerJsComponent extends React.Component {
  render() {
    return (
      <div className="">
      <div className="displatboxcontainerjs-component row">

        <DisplayBoxJsComponent {...this.props} defaultText="values"/>
        <DisplayBoxJsComponent {...this.props} defaultText="hey" />
        <DisplayBoxJsComponent {...this.props} defaultText="yo yo"/>


      </div>
      </div>
    );
  }
}

export default DisplatBoxContainerJsComponent;

