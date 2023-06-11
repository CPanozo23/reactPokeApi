import { useParams } from "react-router-dom"
import { getPokeById } from "../helpers/getPokeById"
//npm install react-router-dom
export const Pokemon = () => {

  const {order} = useParams()
  const poke = getPokeById(order)
  let type2=""
  let abi2=""
  poke.types.length>1 ? type2="-"+poke.types[1].type.name: ""
  poke.abilities.length>1 ? abi2="-"+poke.abilities[1].ability.name: ""

  if(!poke) {
    return <h2>Pokemón no encontrado</h2>
  }

  return (
    <div className='p-1 mt-2 mb-2 bg-warning card container'>
      <h2 className='card-title p-2 bg-warning'>{poke.name.toUpperCase()}</h2>
      
      <div className="mb-1">
        <div className="card-body">
          

          <div className="bg-white rounded-lg container d-flex justify-content-center align-items-center">
        <div className="col-6">
          <img src={poke.sprites.other.dream_world.front_default} className="card-img-top" alt={poke.name} />
        </div>
        <div className="col-6">
          <img className="card-img-top" src={poke.sprites.other.home.front_default} alt={poke.name}/>
        </div>
      </div>

        </div>
      </div>

      <div className="mb-1">
        <div className="card-body">
          <h5 className="card-title">
            Características
          </h5>

          <ul className="list-group">
            <li className="list-group-item">
              <img src={poke.sprites.front_default} alt={poke.name}/>
              Experiencia Base: {poke.base_experience}</li>
            <li className="list-group-item">
              <img src={poke.sprites.back_default} alt={poke.name}/>
              Habilidades: {poke.abilities[0].ability.name} {abi2}</li>
            <li className="list-group-item">
              <img src={poke.sprites.front_shiny} alt={poke.name}/>
              Tipo: {poke.types[0].type.name} {type2}</li>
            <li className="list-group-item">
              <img src={poke.sprites.back_shiny} alt={poke.name}/>
              Peso: {poke.weight}</li>
          </ul>

        </div>
      </div>
    </div>
  )
}