import React from 'react'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import avatar from '../../assets/default_user.jpg'
import classes from './Identify.module.css'

const Identify = () => {
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
        <TextInput></TextInput>
        <Button>
            PLAY
        </Button>
    </Container>
}

export default Identify