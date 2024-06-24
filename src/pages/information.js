import { React,useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './home.css';
import '../components/cardpokemon.css'
import axios from 'axios'
import './information.css'
import { Card, CardBody, CardHeader, CardFooter, Heading, Image, Text, Badge, Flex, Button} from "@chakra-ui/react";

const Information = () => {
    const {id} = useParams()
    const pokemonIndex = parseInt(id)
    const [pokemon, setPokemon] = useState(null);
    const [typeColors, setTypeColors] = useState({})

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const pokemonIndex = id
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
                setPokemon(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do Pokémon:", error);
            }
        };

        fetchPokemon();
    },[id]);


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

    const link = `http://localhost:3000/pokemon/${pokemonIndex}`

    return (
        <div>
            <Link to="http://localhost:3000/home">
            <Button className="returnHomeButton">Voltar a Pagina Anterior</Button>
            </Link>
            <div className="card-container-wrapper">
            {pokemon && (
                <Card className="card-container" maxWidth="400px">
                    <CardHeader>
                        <Heading>{pokemon.name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Link to={link}>
                        <Image index={pokemonIndex} className="pokemon-image" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                        </Link>
                        <Flex direction="column" backgroundColor={'plum'} borderRadius={'8px'} alignItems={'center'}>
                            <Text>Habilidades:</Text>
                            {pokemon.abilities.map((ability, index) => (
                                <Badge  key={index}>{ability.ability.name}</Badge>
                            ))}
                            <Text>Altura: {pokemon.height}m</Text>
                            <Text>Peso: {pokemon.weight}kg</Text>
                        </Flex>
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
        </div>
    );
}

export default Information