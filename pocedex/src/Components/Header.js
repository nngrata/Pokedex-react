import React, {Component} from "react";
import {Navbar, Container, Form, FormControl, Button} from "react-bootstrap";
import Logo from './logo.png'
export default class Header  extends Component{
    render(){
        // const handleChange = (e) =>{
        //     setPokemon(e.target.value.toLowerCase())
        // };
        // const handleSubmit = (e) =>{
        //     e.preventDefault();
        //     getP();
        // };
        return(
            <>
            <Navbar  bg ="warning" expand="md" fixed='top'>
                <Container>
                    <Navbar.Brand href = "/">
                        <img
                        src={Logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Logo"
                        />
                    </Navbar.Brand>
                    <h2 className="mr-auto">Pocedex</h2>
                    <Form inline>
                        <FormControl
                        type = "text"
                        placeholder = "Pokemon name or Number"
                        className = "mr-sm-2"
                        // onChange={handleChange}
                        />
                        <Button variant = "dark">Search</Button>
                    </Form>
                </Container>
            </Navbar>
           </>
        )

    }
}