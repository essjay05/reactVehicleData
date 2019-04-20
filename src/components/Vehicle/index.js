import React, { Component } from 'react';

// General vehicle link/info:

class Vehicle extends Component {
    render() {
        let year = this.props.year;
        let make = this.props.make;
        let model = this.props.model;
        return (
            <section className="vehicle">
                <a href=""><h2>{year} {make} {model} TEMPORARY VEHICLE DATA </h2></a>
            </section>
        )
    }
}
export default Vehicle;

// Below is the table detail data for an individual Vehicle
        {/* <div className="vehicle">
            {vehicle.map((vehicle, index) => {
                return<div className="vehicleBox">
                    <table style="width:100%;">
                        <tr>
                            <th>Vehicle Details</th>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Year:</th>
                            <td></td>
                        </tr>
                    </table>
            })}
        </div> */}