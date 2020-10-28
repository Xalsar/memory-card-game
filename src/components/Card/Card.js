import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    if (props.hidden) {
        return <div
            className={[classes.card, classes.hidden].join(' ')}
            onClick={props.click}
        >
            <h2>?</h2>
        </div>

    } else {
        return <div
            className={classes.card}
            style={{
                backgroundColor: `var(${props.color})`,
                opacity: props.active ? 0.3 : 1
            }}
        >
        </div>
    }
}

export default Card