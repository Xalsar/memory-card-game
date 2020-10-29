import React from 'react'
import avatar from '../../assets/default_user.jpg'
import classes from './UserAvatar.module.css'

const UserAvatar = (props) => (
    <div className={classes.avatar}>
        <img src={avatar} alt="User"/>
        <h3>
            Mr Doggo
        </h3>
    </div>
)

export default UserAvatar