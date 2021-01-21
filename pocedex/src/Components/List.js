import React, {Component, useState} from 'react';
import Pokemon from "./Pokemon";
import axios from "axios";
import {Button} from "react-bootstrap";
class List extends Component {
    limit = 10;
    offset = 0;

    state = {
        url: `https://pokeapi.co/api/v2/pokemon`,
        pokemon: null,
        limit: null,
        offset: null,

    };
    async componentDidMount() {
        const res = await axios.get(this.state.url+`?offset=${this.offset}&limit=${this.limit}`);
        this.setState({pokemon: res.data['results']});
    }
    reloadNext() {
        this.setState({offset: this.offset += this.limit});
        this.componentDidMount();
    }
    reloadPrev() {
        if(this.offset > 0) {
            this.setState({offset: this.offset -= this.limit});
            this.componentDidMount();
        }
    }
    Count(value) {
        this.setState({limit: this.limit = value});
        this.componentDidMount();
    }
    render() {
        return (
            <>
            <div>
            {this.state.pokemon ? (<div className="row">
                    {this.state.pokemon.map(pokemon => (<Pokemon
                    key = {pokemon.name}
                    name = {pokemon.name}
                    url = {pokemon.url}
                    />))}
                </div>) : (<h1>Loading ...</h1>)}
            </div>
            <div className="container">
                <Button variant="dark" onClick={() => this.reloadPrev()}>Back</Button>
                <Button variant="dark" onClick={() =>  this.reloadNext()}>Next</Button>
            </div>
            <div className="container">
                <Button variant="dark" onClick={() =>  this.Count(10)}>10</Button>
                <Button variant="dark" onClick={() =>  this.Count(15)}>15</Button>
                <Button variant="dark" onClick={() =>  this.Count(25)}>25</Button>
                <Button variant="dark" onClick={() =>  this.Count(50)}>50</Button>
            </div>
            </>
        );
    }
}
export default List;