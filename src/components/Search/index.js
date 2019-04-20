import React, { Component } from 'react';
import axios from 'axios';
import Vehicle from '../Vehicle';
import './Search.css';

export default class Search extends Component {
    state = {
        vehicle: [],
        search: " "
    }

    handleChange = ({ target: {name, value }}) => { this.setState({ [name]: value }) };

    handleSubmit = (e) => {
        e.preventDefault();
        let { vehicle, search } = this.state;
            axios.get(`https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data`)
                .then(({ data }) => {
                    debugger
                    console.log(data);
                    debugger
                })
    }

    render () {
        let { vehicle, search } = this.state
        return (
            <main className= "container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={this.handleChange}
                        className="form-control"
                        id="searchVehicle"
                        aria-describedby="emailHelp"
                        placeholder="Enter search term" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Vehicle />
            </main>
        )
    }
}