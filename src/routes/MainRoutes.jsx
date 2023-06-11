import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Pokemones } from "../pages/Pokemones"
import { Pokemon } from "../pages/Pokemon"

export const MainRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:order' element={<Pokemon />} />

        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  )
}
