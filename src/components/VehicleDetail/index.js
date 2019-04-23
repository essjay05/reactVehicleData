import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Vehicle.css';
// import axios from 'axios';


export default class VehicleDetail extends Component {
    state = {
        vehicles:  [],
        vehicle: null,
        loading: true
    }

    // async componentDidMount() {
    //     let { vehicles } = this.props;
    //     try {
    //     let { data: { payload } } = await axios.get(`/vehicles/${this.props.match.params.id}`);
    //         console.log(this.props.match.params.id);
    //         this.setState({ vehicle: payload })
    //         console.log(payload);
    //         // debugger
    //     } catch(err) {
    //         debugger
    //     }
    // }

    
    render() {
        let { vehicles} = this.props;
        let i = this.props.match.params.id;
            // console.log(vehicles);
            // console.log(this.props.match.params.id);
            // console.log(vehicles[i]);
        // Use params.id from url to search Vehicles array for correct vehicle
        let vehicle = vehicles.find(vehicle => vehicle.id == i);
            // console.log(vehicle);
        // Populate object entries to print below;
        // const entries = Object.entries(vehicle);
        // console.log(entries);

            // debugger
        
        return (
        <div className="container">
            <h1>{vehicle.Year} {vehicle.Make} {vehicle.Model}</h1>
            <Link
                className="nav-link"
                to={`/vehicles`}>Return to List View
            </Link>    
            <h2>Detail View</h2>
            <table>
                <thead>
                    <tr>
                        <th>Vehicle Details </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Vehicle ID</th>
                        <td>{vehicle.id}</td> 
                    </tr>
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
                        <td>{vehicle["Fun Factor"]}</td>
                    </tr>
                    <tr>
                        <th>Cool Factor</th>
                        <td>{vehicle["Cool Factor"]}</td>
                    </tr>
                    <tr>
                        <th>Weekend Score Total</th>
                        <td>{vehicle["Weekend Score Total"]}</td>
                    </tr>
                    <tr>
                        <th>Features</th>
                        <td>{vehicle.Features}</td>
                    </tr>
                    <tr>
                        <th>Comfort</th>
                        <td>{vehicle.Comfort}</td>
                    </tr>
                    <tr>
                        <th>Quality</th>
                        <td>{vehicle.Quality}</td>
                    </tr>
                    <tr>
                        <th>Practicality</th>
                        <td>{vehicle.Practicality}</td>
                    </tr>
                    <tr>
                        <th>Value</th>
                        <td>{vehicle.Value}</td>
                    </tr>
                    <tr>
                        <th>Daily Score Total</th>
                        <td>{vehicle["Daily Score Total"]}</td>
                    </tr>
                    <tr>
                        <th>Total Score</th>
                        <td>{vehicle["Total Score"]}</td>
                    </tr>
                    <tr>
                        <th>Video Link</th>
                        <td>{vehicle["Video Link"]}</td>
                    </tr>
                    <tr>
                        <th>Filmed at City</th>
                        <td>{vehicle["Filmed at City"]}</td>
                    </tr>
                    <tr>
                        <th>Filmed at Country</th>
                        <td>{vehicle["Filmed at Country"]}</td>
                    </tr>
                    <tr>
                        <th>Vehicle Country</th>
                        <td>{vehicle["Vehicle Country"]}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        )
    }
}