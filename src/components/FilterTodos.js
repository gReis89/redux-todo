import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const FilterTodos = ({filter}) => {
  return (
    <div className="has-text-right">
      Show:&nbsp;
      <IndexLink to="/" activeClassName="Link-active">All</IndexLink>&nbsp;
      <Link to="/active" activeClassName="Link-active">Active</Link>&nbsp;
      <Link to="/completed" activeClassName="Link-active">Completed</Link>
    </div>
  );
};

FilterTodos.propTypes = {
  filter: PropTypes.string
};

export default FilterTodos;
