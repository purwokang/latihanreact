import React, { Component } from 'react';

class Component4 extends Component {

    state = {
        nama: "Purwo",
        semester: 2,
        hobi: "Ngoding"
    };

    render() {
        return (
            <div>
                <h3>Nama: {this.state.nama} </h3>
                <p>Semester: {this.state.semester} </p>
                <div>{this.state.hobi} </div>
                <p>================</p>
            </div>
        );
    }
}

export default Component4;