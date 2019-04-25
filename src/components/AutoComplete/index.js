import React, { Component } from 'react';

export default class AutoComplete extends Component {
    state = {
        suggestions: []
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0 ) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.props.vehicles.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions }));
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((vehicle) => <li>{vehicle}</li>)}
            </ul>
        )
    }

    render () {
        let { vehicles } = this.props;
        console.log(vehicles);
        return (
            <div>
                <input type="text" onChange={this.onTextChanged} />
                {this.renderSuggestions()}
            </div>
        )
    }
}