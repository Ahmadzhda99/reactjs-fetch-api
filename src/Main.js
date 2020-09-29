import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Provinsi from './Provinsi';
import KabKota from './KabKota';
import Kecamatan from './Kecamatan';
import DesaKel from './DesaKel';
import About from './About';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className='title'>Fetching Data API</h1>
          <ul className='header'>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/provinsi">Provinsi</NavLink></li>
            <li><NavLink to="/kabkota">Kabupaten/Kota</NavLink></li>
            <li><NavLink to="/kecamatan">Kecamatan</NavLink></li>
            <li><NavLink to="/desakel">Desa/Kelurahan</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/provinsi" component={Provinsi} />
            <Route exact path="/kabkota" component={KabKota} />
            <Route exact path="/kecamatan" component={Kecamatan} />
            <Route exact path="/desakel" component={DesaKel} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;