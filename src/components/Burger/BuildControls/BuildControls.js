import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';



const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props)=>(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl disabled={ props.disabled[ctrl.type] } key={ctrl.label} label={ctrl.label} removed={()=> props.ingredientRemoved(ctrl.type)} added={()=> props.ingredientsAdded(ctrl.type)} />
            ))}
            <button disabled={ !props.purchasable } onClick={props.ordered} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )


export default buildControls;