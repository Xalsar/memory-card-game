import React from 'react'
import dateformat from 'dateformat'
import classes from './PodiumList.module.css'

const PodiumList = (props) => (
    <ul className={classes.list}>
        {props.items.map((item, id) => (
            <li key={id}>
                <span className={classes.name}>{item.name}</span>
                <span className={classes.time}>({dateformat(item.score, 'MM:ss')})</span>
            </li>
        ))}
    </ul>
)

export default PodiumList