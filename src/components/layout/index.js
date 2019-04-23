import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Layout extends Component {
    render () {
        return (
        <main>
            <Navbar />
            <div className="container">
                { this.props.children }
            </div>
        </main>
        )
    }
}