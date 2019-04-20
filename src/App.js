import React, { Component } from 'react';
import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Vehicle from './components/Vehicle';
import VehicleIndex from './components/VehicleIndex';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
        vehicles: []
    }

    componentDidMount () {
        axios.get(`https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data`)
        .then(res => {
            // console.log(res.data);
            this.setState({ vehicles: res.data })
            console.log(this.state);
        })
        .catch(err => {
            debugger
        })
    }
	
	render() {
		let { vehicles } = this.state;
		return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/vehicles" render={(props) => {
					return <VehicleIndex {...props} vehicles={this.state.vehicles} />
				}} />
				<Route path="/search" render={(props) => {
					return <Search {...props} vehicles={this.state.vehicles} />
				}} />
			</Switch>
		</Layout>
		)
	}
}

export default App;
