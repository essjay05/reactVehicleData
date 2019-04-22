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
                <li>
                    <h3>Testing header {vehicle.id}</h3>
                    <Link
                    className="nav-link"
                    vehicle={ vehicle }
                    vehicleid={ vehicle.id }
                    to={`/vehicles/${vehicle.id}`}><p>{vehicle.Year} {vehicle.Make} {vehicle.Model} Details </p>
                </Link></li>
            </ul>
        </div>
        )
    }
}