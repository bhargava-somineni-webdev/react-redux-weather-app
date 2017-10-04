import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };

        //this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
                <input placeholder="Get five-day forecast by entering city name"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                //earlier we used onChange = {this.onInputChange}, 
                //without calling onInputChange inside arrow function
                //the problem with this is, 'this' keyword no longer holds the SearchBar component context
                //'this' becomes undefined, unless we bind 'this' inside our constructor, which
                //we see as a commented line that binds the 'SearchBar' context to onInputChange method
                //'this' = instance of SearchBar context, which we are creating using <SearchBar/> inside app.js
                //its not the SearchBar context itself
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                        </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); 