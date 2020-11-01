import React from 'react'
import classes from './Loading.module.css'

const Loading = () => (
    <div className={classes.container}>
        <div className={classes.loader}>Loading...</div>
    </div>
)

export default Loading