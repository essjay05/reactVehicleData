import React, { Component } from 'react';
import Navbar from './Navbar';


export default class Layout extends Component {
    
    render () {
        return (
            <div className="page-wrapper">
                <Navbar />
                {/* <main className="container main"> */}
                    {/* { this.props.children }     */}
                {/* </main> */}
            </div>
        )
    }
};