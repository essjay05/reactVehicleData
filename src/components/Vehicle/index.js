import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Vehicle.css';
// import axios from 'axios';

// General vehicle link/info:

export default class Vehicle extends Component {
    state = {
        vehicle:null,
        vehicles: [],
        key:null
    }
    
    render() {
        let { vehicle, vehicles, i } = this.props;
        // console.log(vehicles[0]);
        // debugger
        return (
        <div className="container">
            <ul className="vehicleList">
                <li><Link
                    key={ i }
                    className="nav-link"
                    vehicle={ vehicle }
                    vehicles={ vehicles }
                    vehicleid={ vehicle.id }
                    to={`/vehicleShow/${ vehicle.id }`}>{vehicle.Year} {vehicle.Make} {vehicle.Model}
                    </Link>
                </li>
            </ul>
        </div>
        )
    }
}