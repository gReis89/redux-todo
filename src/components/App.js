import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div>
      Hello World
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
