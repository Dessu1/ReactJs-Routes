import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='btn-group'>
          <Link className='btn btn-dark mr-2' to='/'>
            Inicio
          </Link>
          <Link className='btn btn-dark mr-2' to='/nosotros'>
            Nosotros
          </Link>
          <NavLink
            className='btn btn-dark '
            to='/contacto'
            activeClassName='active'
          >
            Contacto
          </NavLink>
        </div>
        <hr />

        <Switch>
          <Route exact path='/nosotros/:id'>
            <User />
          </Route>
          <Route exact path='/contacto'>
            <Contacto />
          </Route>
          <Route exact path='/nosotros'>
            <Nosotros />
          </Route>
          <Route exact path='/'>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
