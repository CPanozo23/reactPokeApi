import {Link}from "react-router-dom"
export const PokemonList = ({pokemon}) =>{

    return (
        <Link className="justify-content-center align-items-center col-3 col-lg-2 col-md-3 col-sm-3 col-xs-3 border m-1 card" to= {`/pokemones/${pokemon.order}`}>
            <img className="w-100" src={pokemon.sprites.front_default}/> 
            <div className='card-title fw-bold justify-content-center align-items-center'>
                {pokemon.name.toUpperCase()}
            </div>
        </Link>
    )
}
