import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    /*
    
    This was the old design, with a super cool flip animation.

    But due to a bug I can not find, the animation fails in some cards randomly. So I retired it.

    */

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