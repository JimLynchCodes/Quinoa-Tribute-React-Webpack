'use strict';

import React from 'react';

require('styles/displayBox/DisplayBoxJs.scss');

class DisplayBoxJsComponent extends React.Component {
  render() {
    return (
      <div className="displayboxjs-component">
        <div className="col-md-4">
          <h1>Hi, I'm a box {this.props.defaultText}.</h1>
        </div>

      </div>
    );
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
