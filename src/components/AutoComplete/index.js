import React, { Component } from 'react';

export default class AutoComplete extends Component {
    state = {
        suggestions: [],
        text: ''
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let { vehicles } = this.props;
        let suggestions = [];
        // console.log(vehicles);
        // debugger
        if (value.length > 0 ) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = vehicles.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        console.log(suggestions);
        if (suggestions.length === 0) {
            return null;
        } return (
            <ul>
                {suggestions.map((vehicle) => <li>{vehicle}</li>)}
            </ul>
        );
    }

    render () {
        // let { vehicles } = this.props;
        // console.log(vehicles);
        const { text } = this.state;
        return (
            <div>
                <input value={text} type="text" onChange={this.onTextChanged} />
                {this.renderSuggestions()}
            </div>
        )
    }
}