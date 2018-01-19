import React, { Component } from 'react';

import '@material/textfield/dist/mdc.textfield.min.css';
import {TextField, TextFieldIcon} from 'rmwc/TextField';
import _ from 'lodash';

const immutableKeys = ['author_id', 'created_at', 'updated_at'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.hydrateForm = this.hydrateForm.bind(this);
  }

  componentWillMount() {
    const { rootItem } = this.props;

    if (rootItem) {
      this.hydrateForm(rootItem);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { rootItem } = nextProps;

    if (rootItem) {
      this.hydrateForm(rootItem);
    }
  }

  hydrateForm(rootItem, formsImmutableKeys = []) {
    if (rootItem) {
      this.setState(prevState => ({
        ...prevState,
        ..._.omit(rootItem, [...immutableKeys, ...formsImmutableKeys]),
      }));
    } else {
      const newState = {};
      _.forEach(this.state, (value, key) => {
        newState[key] = '';
      });

      this.setState(newState);
    }
  };

  onChange(event, key) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    const {name} = this.state;

    return (
        <TextField
          autoCapitalize="words"
          label="Category Name"
          name="name"
          onChange={event => this.onChange(event, 'name')}
          required
          type="text"
          value={name}
          withLeadingIcon={<TextFieldIcon use="move_to_inbox" />}
        />
    );
  }
}

App.defaultProps = {
  rootItem: {
    name: 'Rmwc Jest'
  }
}

export default App;
