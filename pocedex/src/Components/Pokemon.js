import React, {Component} from 'react';
import axios from "axios";

class Pokemon extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        types: [],
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            specialAttack: '',
            specialDefense: ''
        }
    };
    async componentDidMount() {
        const { name, url, type } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonrRes = await axios.get(pokemonUrl);
        this.setState({
            name,
            imageUrl,
            pokemonIndex,
            type
        });
    }

    render() {
        return (
            <div className='col-md-3 col-sm-6'>
                <div className="pokemon">
                    <div><h5>{this.state.pokemonIndex}</h5></div>
                    <div className="card-body mx-auto">
                        <div className="icontainer">
                        <img src={this.state.imageUrl} alt="pokemon"/>
                        </div>
                        <h6>{this.state.name.toUpperCase()}</h6>
                        <h6>Type: </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokemon;