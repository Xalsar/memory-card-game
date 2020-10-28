import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    return <div 
    className={classes.card}
    style={{
        backgroundColor: `var(${props.color})`
    }}
    >
    </div>
}

export default Card