import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = ()=> (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Logo"/>
    </div>
);


export default logo