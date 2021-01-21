import './App.css';
// import './style.css'
// import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import {Component} from "react";
import Dash from "./Components/Dash";
class App extends Component{
    render() {
        return(
            <div className='App'>
                <Header />
                <div className="container">
                    <Dash />
                </div>
            </div>

        );
    }


}
export default App;
