import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    const activeClasses = [classes.card]

    if (props.hidden) {
        activeClasses.push(classes.hidden)
    }

    if (props.active) {
        activeClasses.push(classes.active)
    }

    return <div
        className={activeClasses.join(' ')}
        onClick={props.hidden ? props.click : undefined}
    >
        <div className={[classes.side, classes.back].join(' ')}>
            <h2>?</h2>
        </div>
        <div
            className={[classes.side, classes.front].join(' ')}
            style={{
                backgroundColor: `var(${props.color})`
            }}
        >
        </div>
    </div>
}

export default Card