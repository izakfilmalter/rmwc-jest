import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: true,
      addListener: function() {},
      removeListener: function() {},
    };
  };
