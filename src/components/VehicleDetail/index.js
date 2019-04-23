import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Vehicle.css';
import axios from 'axios';

// General vehicle link/info:


export default class VehicleDetail extends Component {
    state = {
        vehicles:  [],
        vehicle: null,
        loading: true
    }
    // Figure out how to load USERS array

    async componentDidMount() {
        let { vehicles } = this.props;
        
    
        try {
        let { data: { payload } } = await axios.get(`/vehicles/${this.props.match.params.id}`);
            console.log(this.props.match.params.id);
            this.setState({ vehicle: payload })
            console.log(payload);
            debugger
            // Check for a brewery to see if it exists as favorite
        //     if (this.state.favorites.indexOf(brewery.id) >= 0) {
        //         this.setState({ like: true }) 
        } catch(err) {
            debugger
        }
    }

// export default class VehicleDetail extends Component {
//     state = {
//         vehicle:null,
//         vehicles: []
//     }
    
    render() {
        let { vehicles} = this.props;
        let i = this.props.match.params.id;
        console.log(vehicles);
        console.log(this.props.match.params.id);
        // console.log(vehicles[i]);
        let vehicle = vehicles.find(vehicle => vehicle.id == i);
        console.log(vehicle);

        debugger
    //     return (

    // render() {
    //     let { vehicle, vehicles } = this.props;
    //     console.log(vehicles);
    //     console.log(vehicle);
    //     debugger;
        return (
        <div className="container">
            <h1>{vehicle.Year} {vehicle.Make} {vehicle.Model}</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>{vehicle.Year} {vehicle.Make} {vehicle.Model} </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Styling</th>
                        <td>{vehicle.Styling}</td> 
                    </tr>
                    <tr>
                        <th>Acceleration</th>
                        <td>{vehicle.Acceleration}</td>
                    </tr>
                    <tr>
                        <th>Handling</th>
                        <td>{vehicle.Handling}</td>
                    </tr>
                    <tr>
                        <th>Fun Factor</th>
                        <td>{vehicle.FunFactor}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}