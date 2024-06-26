import { Badge, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import './cardpokemon.css'
import { Link } from "react-router-dom";

const CardPokemon = ({ pokemonIndex }) => {
    const [pokemon, setPokemon] = useState(null);
    const [typeColors, setTypeColors] = useState({})

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pokemon/${pokemonIndex}`);
                setPokemon(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do Pokémon:", error);
            }
        };

        fetchPokemon();
    }, [pokemonIndex]);


    useEffect(() => {
        const colors = {
            fire: "red",
            electric: "yellow",
            poison: "purple",
            water: "blue",
            grass: "seagreen",
            bug: "darkgreen",
            flying: "aqua",
            normal: "black",
            ground: "brown",
            ghost: "purple",
            fighting: "orangered",
            steel: "slateblue",
            ice: "darkslateblue",
            psychic: "pink",
            fairy: "palevioletred",
            rock:"peru",
        }
        setTypeColors(colors)
    }, [])

    if(!pokemon){
        return <div>Servidor Não Disponivel!</div>
    }
    const link = `http://localhost:3000/pokemon/${pokemonIndex}`
    return (
        <div className="card-container-wrapper">
            {pokemon && (
                <Card className="card-container" maxWidth="400px">
                    <CardHeader>
                        <Heading>{pokemon.name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Link to={link}>
                        <Image className="pokemon-image" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
                        </Link>
                    </CardBody>
                    <CardFooter>
                        <p>Tipo: </p>
                        {pokemon.types.map((type, index) => (
                            <p  className="type"key={index} style={{color: typeColors[type.type.name]}}>{type.type.name}</p>
                        ))}
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}

export default CardPokemon;

