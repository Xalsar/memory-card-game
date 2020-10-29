import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import avatar from '../../assets/default_user.jpg'
import classes from './Identify.module.css'

const Identify = (props) => {
    const [error, setError] = useState(false)
    const history = useHistory()

    const errorMessage = error ? <span className={classes.error}>You need a name in order to play!</span> : undefined

    if(error && props.name) {
        setError(false)
    }

    return <Container>
        <img
            src={avatar}
            alt="avatar"
            className={classes.avatar}
        />
        <div className={classes.title}>
            <Title>
                What is your player name?
            </Title>
        </div>
        <TextInput
            change={props.changeName}
            value={props.name}
        ></TextInput>
        {errorMessage}
        <Button
            click={() => {
                if (!props.name) {
                    setError(true)
                } else {
                    history.push('/game')
                }
            }}
        >
            PLAY
        </Button>
    </Container>
}

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName: (name) => dispatch({ type: 'CHANGE_NAME', name })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Identify)