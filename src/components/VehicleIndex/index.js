import React, { Component } from 'react';
// import axios from 'axios';
import Vehicle from '../Vehicle';
import './VehicleIndex.css';

export default class VehicleIndex extends Component {
    state = {
        vehicles: []
    }
    
    render() {
        let { vehicles } = this.props;

        console.log(this.props);
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
                <Vehicle />
            </div>
        )
    }
};