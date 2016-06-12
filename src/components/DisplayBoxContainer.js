require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class DisplayBoxContainer extends React.Component {
  render() {
    return (
      <div className="display-box-container">
        <h1>Hello World!</h1>

        <div className="notice">Please fart <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}


DisplayBoxContainer.defaultProps = {
};

export default DisplayBoxContainer;
