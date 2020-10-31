import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    const activeClasses = [classes.card]

    if (props.hidden) {
        activeClasses.push(classes.hidden)
    }

    if(props.active) {
        activeClasses.push(classes.active)
    }

    return <div
        className={activeClasses.join(' ')}
        style={{
            backgroundColor: `var(${props.color})`
        }}
        onClick={props.hidden ? props.click : undefined}
    >
        {props.hidden ? <h2>?</h2> : undefined}
    </div>
}

export default Card