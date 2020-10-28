import React from 'react'
import Card from '../../components/Card/Card'
import classes from './Desk.module.css'

const Desk = () => {
    return (
        <container className={classes.desk}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> 
            <Card/> 
        </container>
    )
}

export default Desk