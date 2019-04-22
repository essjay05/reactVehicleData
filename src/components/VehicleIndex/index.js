import React, { Component } from 'react';
import axios from 'axios';
import Vehicle from '../Vehicle';
import './VehicleIndex.css';

export default class VehicleIndex extends Component {
    state = {
        vehicles: []
    }
    
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

    render() {
        let { vehicles } = this.props;
        console.log(vehicles);
        console.log(vehicles[0]);
        debugger

        return (
            <div className="vehiclesContainer">
                <h1 className="headTitle">Vehicle Index</h1>
                <ul>
                    <div className="vehicle">
                    {vehicles.map((vehicle, i) => {
                    return<div key={i}>
                        
                        <Vehicle
                            key={i}
                            vehicle={ vehicle }
                            vehicles= { vehicles }
                            onClick={ this.handleClick }
                        />
                        </div>   
                    })}
                    </div>
                </ul>
            </div>
        )
    }
};