'use strict';

import React from 'react';
import DisplayBoxJsComponent from 'components/displayBox/DisplayBoxJsComponent.js'

require('styles/displayBoxContainer/DisplatBoxContainerJs.scss');


class DisplatBoxContainerJsComponent extends React.Component {
  render() {
    return (
      <div className="">
        <div className="displatboxcontainerjs-component row">


          <div className="col-md-4">

          <DisplayBoxJsComponent {...this.props} defaultText="values"/>
        </div>
        <div className="col-md-4">
          <DisplayBoxJsComponent {...this.props} defaultText="hey"/>
        </div>
        <div className="col-md-4">
          <DisplayBoxJsComponent {...this.props} defaultText="yo yo"/>
        </div>

      </div>
  </div>
  )
    ;
  }
}

export default DisplatBoxContainerJsComponent;

