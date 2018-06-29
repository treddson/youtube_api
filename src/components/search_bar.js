import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
    }
    render() {
        return  (
        <React.Fragment>
            <input 
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value }) } />
        </React.Fragment>
      );
    }
  }



