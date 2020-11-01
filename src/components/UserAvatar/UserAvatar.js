import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import avatar from '../../assets/default_user.jpg'
import classes from './UserAvatar.module.css'

const UserAvatar = (props) => (
    <div className={classes.avatar}>
        <img src={avatar} alt="User" />
        <div className={classes.text}>
            <h3>
                {props.userName}
            </h3>
            <Link to="/">
                Change user
            </Link>
        </div>
    </div>
)

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}

export default connect(mapStateToProps)(UserAvatar)