import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NavPanel = props => (
  <div className="nav-panel">
    <ul className="nav-panel__list"> {props.children} </ul>
  </div>
);

NavPanel.propTypes = propTypes;

export default NavPanel;
