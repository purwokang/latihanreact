import React, { Component } from 'react';

import "./CSS/Produk.css";



class Produk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disable: false
        };
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock - 1
        });
        if (this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            });
        }
    };

    render() {
        return (
            <div className="box-stock" >
                <h2>{this.props.nama}</h2>
                <img src="https://sm.mashable.com/t/mashable_sea/review/a/apple-macb/apple-macbook-pro-13-inch-2020-review-if-it-aint-broke-give_7bqa.960.jpg" alt="" />
                <p><b>Rp. {this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled} >Beli</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default Produk;