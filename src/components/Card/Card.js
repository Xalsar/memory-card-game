import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    return <div 
    className={classes.card}
    style={{
        backgroundColor: `var(${props.color})`,
        opacity: props.active ? 0.3 : 1
    }}
    onClick={props.active ? null : props.click}
    >
        {props.active} 
    </div>
}

export default Card