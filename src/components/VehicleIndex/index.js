import React, { Component } from 'react';
// import axios from 'axios';
import Vehicle from '../Vehicle';
import './VehicleIndex.css';
import HideableText from '../HideableText';

export default class VehicleIndex extends Component {
    state = {
        search: ''
    };
    
    // componentDidMount () {
    //     axios.get(`https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data`)
    //     .then(res => {
    //         // console.log(res.data);
    //         this.setState({ vehicles: res.data })
    //         console.log(this.state);
    //     })
    //     .catch(err => {
    //         debugger
    //     })
    // } 

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        let { vehicles } = this.props;
        let filteredVehicles = this.props.vehicles.filter((vehicle) => {
            // return vehicle.make.indexOf(this.state.search) !== -1;
            console.log(this.props.vehicles);
        });
        // console.log(vehicles);
        // console.log(vehicles[0]);
        // debugger

        return (
            <div className="vehiclesContainer">
                <h1 className="headTitle">Vehicle Index</h1>
                <p>Click on Vehicle Name for Details</p>
                <p>OR</p>
                <p>Enter search to filter results:</p>
                <input 
                    type="text" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                <HideableText text="Dynamic Text" />
                <ul>
                    <div className="vehicle">
                    {vehicles.map((vehicle, i) => {
                    return<Vehicle
                            key={ i }
                            vehicle={ vehicle }
                            vehicles= { vehicles }
                            />  
                    })}
                    </div>
                </ul>
                <ul>
                    <div className="vehicle">
                    {filteredVehicles.map((vehicle, i) => {
                    return<Vehicle
                            key={ i }
                            vehicle={ vehicle }
                            vehicles= { vehicles }
                            />  
                    })}
                    </div>
                </ul>
            </div>
        )
    }
};