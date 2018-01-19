import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Enzyme
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const container = mount(<App />);

  expect(container.length).toEqual(1);
});
