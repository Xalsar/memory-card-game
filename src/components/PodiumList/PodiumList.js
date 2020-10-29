import React from 'react'
import classes from './PodiumList.module.css'

const PodiumList = (props) => (
    <ul className={classes.list}>
        {props.items.map((item, id) => (
            <li>
                <span className={classes.name}>{item.name}</span>
                <span className={classes.time}>({item.time})</span>
            </li>
        ))}
    </ul>
)

export default PodiumList