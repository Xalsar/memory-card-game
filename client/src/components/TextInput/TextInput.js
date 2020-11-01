import React from 'react'
import classes from './TextInput.module.css'

const TextInput = (props) => (
    <input
        className={classes.input}
        onChange={(e) => props.change(e.target.value)}
        value={props.value}
        type="text"
    />
)

export default TextInput