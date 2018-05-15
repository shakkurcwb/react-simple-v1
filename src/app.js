import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import { _config } from './lib/config.js';
import { Href } from './lib/helpers.js';

export default function() {
  return (
    <div className="App">
      <BrowserRouter>
        <View />
      </BrowserRouter>
    </div>
  );
}

const View = (props) => {
  return (
    <div className="View">
        <Menu />
        <Content />
        <Footer />
    </div>
  );
}

const Menu = (props) => {
  return (
    <div className="Menu">

      <nav className="navbar navbar-dark bg-dark navbar-expand-sm navbar-expand-xs">
        <NavLink className="navbar-brand" to={_config.brand.path}>
          <img
            src={_config.brand.logo.source}
            alt={_config.brand.logo.text}
            width="45"
            height="30"
          />
          {_config.brand.title}
        </NavLink>
        <ul className="navbar-nav ml-auto">
        {
          _config.routes
            .filter((route, index) => {
              return ( route.menu ? route : null );
            })
            .map((route, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  className="nav-link"
                  to={route.path}
                  title={route.title}
                  activeClassName="active"
                  exact={false}
                >
                  <i className={route.icon}></i> {route.title}
                </NavLink>
              </li>
            ))
        }
        </ul>
      </nav>

    </div>
  );
}

const Content = (props) => {
  return (
    <div className="Content">
      <div className="container">
        <Switch>
          {
            _config.routes
              .map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))
          }
          <Redirect from="/" to="/home" exact />
          <Route path="/home" exact component={_config.routes[0].component} />
          <Route component={_config.error404.component} />
        </Switch>
      </div>
    </div>
  );
}

const Footer = (props) => {
  return (
    <div className="Footer">
      <footer className="bg-dark">
        <p className="text-white pt-2 pb-2 mb-0">
          Developed using <Href
            target="_blank"
            url="https://reactjs.org/"
            title="React JS"
          />.
        </p>
      </footer>
    </div>
  );
}