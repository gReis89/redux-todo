import React from 'react';

/**
 * React dumb component to list todos
 */
const Header = () => {
  return (
    <section className="hero is-small is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            React + Redux Todo List
          </h1>
          <h2 className="subtitle">
            Styled with <a href="http://bulma.io/" target="_blank">Bulma</a> by <a href="https://github.com/gReis89" target="_blank">Guilherme Rodrigues</a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
