import React, { Component } from "react";
import C3 from "./Component3";


class Component1 extends Component {
    render() {
        return (
            <div>
                <h1>Ini Statefull --Component1</h1>
                <p><i><C3 /></i></p>
            </div>
        );
    }
}

export default Component1;