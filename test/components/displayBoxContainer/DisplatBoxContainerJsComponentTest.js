/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import DisplatBoxContainerJsComponent from 'components/displayBoxContainer/DisplatBoxContainerJsComponent.js';

describe('DisplatBoxContainerJsComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(DisplatBoxContainerJsComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('displatboxcontainerjs-component');
  });

  it('should create an elements with props hello', () => {

    
  })
});
