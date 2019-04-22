import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Vehicle.css';

// General vehicle link/info:

export default class Vehicle extends Component {
    state = {
        vehicle:null,
        vehicles: [],
    }

    render() {
        let { vehicle } = this.props;
        return (
        <div className="container">
            <ul className="vehicleList">
                <li><Link
                    className="nav-link"
                    vehicle={ vehicle }
                    vehicleid={ vehicle.id }
                    to={`/vehicles/${vehicle.id}`}>{vehicle.Year} {vehicle.Make} {vehicle.Model}
                    </Link>
                </li>
            </ul>
        </div>
        )
    }
}