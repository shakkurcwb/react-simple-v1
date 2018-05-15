import React from 'react';

import _logo from './logo.svg';

const FakeComponent = (props) => {
  return (
    <div className="Fake-Component">
      <h1>Fake Component</h1>
    </div>
  );
};

const Error404 = (props) => {
  return (
    <div className="Not-Found">
      <h1>Error 404</h1>
      <h3>Sorry, page <mark>{props.location.pathname}</mark> doesn't exist.</h3>
    </div>
  );
}

export const _config = {
  brand: {
    title: 'Block App V1',
    path: '/home',
    logo: {
      // source: 'https://cdn-images-1.medium.com/max/512/0*QKJemZKR6vA6hMAj.png',
      source: _logo,
      text: 'React Logo',
    },
  },
  error404: {
    component: Error404,
  },
  routes: [
    {
      menu: true,
      path: '/home',
      exact: true,
      component: FakeComponent,
      title: 'Home',
      icon: 'fas fa-home',
    },
  ],
};