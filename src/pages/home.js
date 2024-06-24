import React from "react";
import CardPokemon from "../components/CardPokemon";
import { useState } from "react";
import './home.css'
import { Link } from "react-router-dom";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1)
    
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    }
    return (
        <div>
        <div className="buttonsContainers">
            <button className="lastPage" onClick={handlePreviousPage}>
             Página Anterior
            </button>
            <Link to="http://localhost:3000/">
            <button className="return">Retornar</button>
            </Link>
            <button className="nextPage"onClick={handleNextPage}>Próxima Página</button>
        </div>
        <div>
            {[1, 2, 3, 4, 5].map((pokemonIndex) => (
                <CardPokemon key={pokemonIndex} pokemonIndex={pokemonIndex + (currentPage - 1) * 5} />
            ))}
        </div>
    </div>
    );
}

export default App;
