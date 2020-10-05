import React, { Component } from 'react';

class FormInput extends Component {
    state = {
        nama: "Purwo",
        alamat: "Jakut",
        hobi: "Ngoding",
        mobil: "Fortuner",
        jenis_kelamin: "Perempuan"

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>Nama Saya: {this.state.nama}</p>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                </div>

                <p>Mobil saya {this.state.mobil} </p>
                <select name="mobil" id="" value={this.state.mobil} onChange={this.handleChange} >
                    <option value="Fortuner">Fortuner</option>
                    <option value="Pajero">Pajero</option>
                    <option value="Alphard">Alphard</option>
                    <option value="Lexus">Lexus</option>
                </select>

                <p>Jenis Kelamin: {this.state.jenis_kelamin} </p>
                <input type="radio" name="jenis_kelamin"
                    value="Laki-laki" id="" onChange={this.handleChange}
                    checked={this.state.jenis_kelamin == "Laki-laki" ? true : false} />
                <input type="radio" name="jenis_kelamin"
                    value="Perempuan" id="" onChange={this.handleChange}
                    checked={this.state.jenis_kelamin == "Perempuan" ? true : false} />
            </div >
        );
    }
}

export default FormInput;


