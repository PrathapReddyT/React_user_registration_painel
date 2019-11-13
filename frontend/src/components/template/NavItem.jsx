import './NavItem.css';
import React from 'react';

export default props => 
    <a href={...props.a}>
        <i className={`fa fa-${props.icon}`}></i>
    </a>
