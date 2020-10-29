import React from 'react'
import { connect } from 'react-redux'
import avatar from '../../assets/default_user.jpg'
import classes from './UserAvatar.module.css'

const UserAvatar = (props) => (
    <div className={classes.avatar}>
        <img src={avatar} alt="User"/>
        <h3>
            {props.userName}
        </h3>
    </div>
)

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}

export default connect(mapStateToProps)(UserAvatar)