import React, {Component} from 'react';
import List from "./List";
import {Button} from "react-bootstrap";
import reloadNext from "./List";
import reloadPrev from "./List";

class Dash extends Component {
    render() {
        return (
            <>
            <div className="row justify-content-center">
                <div className="col">
                <List />
                </div>
            </div>

            </>
        );
    }
}

export default Dash;