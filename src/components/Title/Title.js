import React from 'react'
import classes from './Title.module.css'

const Title = (props) => (
    <h2 className={classes.title}>{props.children}</h2>
)

export default Title