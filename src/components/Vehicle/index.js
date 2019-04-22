import React from 'react';
import { Link } from 'react-router-dom';
// import './Vehicle.css';

// General vehicle link/info:

export default ({ vehicles }) => {

    if (!vehicles) return <h1> NOT SAVING TO VEHICLES STATE</h1>
    return (
        <div className="container">
            {vehicles.map(( vehicle, i )=> {
                return<ul className="vehicleList">
                    <li><Link>
                        key={i}
                        className="nav-link"
                        vehicle={ vehicle }
                        vehicleId={ vehicle.id }
                        to={`/vehicles/${vehicle.id}`}>{vehicle.year} {vehicle.make} {vehicle.model} Details
                    </Link></li>
                </ul>
            })}
        </div>
    )
}
// class Vehicle extends Component {
//     state = {
//         vehicles: [],
//         vehicle: null
//     }

//     async componentDidMount() {
//         // let { user } = this.props
//         // let { resume } = this.props.currentUser;
//         // let { projects }  = this.props.currentUser.resume;
//         console.log(vehicle)
//         console.log(this.props)
//         debugger
        
//         try {
//             let { data: { payload } } = await axios.get(`/api/users/${this.props.match.params.id}`);
//             this.setState({ 
//                 projects: payload.projects,
//                 user: payload,
//                 loading: false 
//             })
//         } catch(err) {
//             console.log(err);
//             debugger
//         }
//     } 

//     render() {
//         let { vehicle } = this.state;
//         console.log(this.props)
//         console.log(this.state)
//         return (
//             <section className="vehicle">
//                 <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
//                 {/* <Link
//                     className="nav-link"
//                     vehicle={ vehicle }
//                     vehicleId={ vehicle.id }
//                     to={`/vehicles/${vehicle.id}`}>{vehicle.year} {vehicle.make} {vehicle.model} Details
//                 </Link> */}
//                 <a href=""><h2>Vehicle Year, Vehicle Make, Vehicle Model </h2></a>
//             </section>
//         )
//     }



// Below is the table detail data for an individual Vehicle
        