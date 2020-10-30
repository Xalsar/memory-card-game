import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import dateformat from 'dateformat'
import axios from '../../axios'
import PodiumList from '../../components/PodiumList/PodiumList'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import Loading from '../../components/Loading/Loading'
import classes from './Resume.module.css'

const Resume = (props) => {
    const interval = new Date(props.endTime - props.startTime)
    const [scores, setScores] = useState([])
    const history = useHistory()

    useEffect(() => {
        if (!props.userName) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        if (scores.length === 0) {
            axios.post('/score/register-and-list', {
                score: interval,
                player: props.userName
            }).then(data => setScores(data.data))
        } else {
            props.restartGame()
        }
    })

    if(scores.length === 0) {
        return <Container><Loading/></Container>
    }

    return <Container>
        <div className={classes.header}>
            <UserAvatar />
            <Title>
                Congratulations, you completed the game!
            </Title>
        </div>
        <h3 className={classes.time}>
            {dateformat(interval, 'MM:ss')}
        </h3>
        <PodiumList
            items={scores}
        />
        <Button
            click={() => {
                history.push('/game')
            }}
        >
            PLAY AGAIN
        </Button>
    </Container>
}

const mapStateToProps = state => {
    return {
        startTime: state.deck.startTime,
        endTime: state.deck.endTime,
        continueGame: state.deck.continueGame,
        userName: state.user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        restartGame: () => dispatch({ type: 'RESTART' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume)