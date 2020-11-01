import React from 'react'
import classes from './Button.module.css'

const Button = (props) => (
    <div className={classes.buttonContainer}>
        <button
            className={classes.button}
            onClick={props.click}
            type={props.type}
        >
            {props.children}
        </button>
    </div>
)

export default Button