import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="nav-item nav-link text-white fs-4 mx-5" to="/">API Pokemón</NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/pokemones">Pokemones</NavLink>
                </div>
                </div>
            </div>
            </nav>
    )
}
