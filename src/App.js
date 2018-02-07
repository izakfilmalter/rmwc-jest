import React, { Component } from 'react';

import '@material/tabs/dist/mdc.tabs.min.css';
import { Tab, TabBar } from 'rmwc/Tabs';

import styled from 'styled-components';

const StyledTab = styled(Tab)`
  background: red !important;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
    };
  }

  render() {
    const { activeTabIndex } = this.state;

    return (
      <TabBar
        activeTabIndex={activeTabIndex}
        onChange={evt =>
          this.setState({ activeTabIndex: evt.target.value })
        }
      >
        <StyledTab>
          Home
        </StyledTab>
      </TabBar>
    );
  }
}

export default App;
