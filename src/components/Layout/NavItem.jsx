import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NavItem = props => <div className="nav-item"> {props.children} </div>;

NavItem.propTypes = propTypes;

export default NavItem;
