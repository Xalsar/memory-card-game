import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import dateformat from 'dateformat'
import Confetti from 'react-confetti'
import axios from '../../axios'
import useWindowDimensions from '../../hooks/getWindowDimensions'
import PodiumList from '../../components/PodiumList/PodiumList'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import PlayerChart from '../../components/PlayerChart/PlayerChart'
import Loading from '../../components/Loading/Loading'
import classes from './Resume.module.css'

const Resume = (props) => {
    const userName = useSelector(state => state.user.name)
    const startTime = useSelector(state => state.deck.startTime)
    const endTime = useSelector(state => state.deck.endTime)

    const dispatch = useDispatch()
    const restartGame = useCallback(() => dispatch({ type: 'RESTART' }))

    const interval = new Date(endTime - startTime)
    const [scores, setScores] = useState({
        top: [],
        player: []
    })
    const history = useHistory()

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        const interval = new Date(endTime - startTime)

        if (!userName) {
            history.push('/')
        } else {
            axios.post('/score/register-and-list', {
                score: interval,
                player: userName
            }).then(data => setScores(data.data))
        }
    }, [userName, startTime, endTime])

    useEffect(() => {
        restartGame()
    }, [restartGame])

    if (scores.top === 0) {
        return <Container><Loading /></Container>
    }

    return <Container>
        <Confetti
            width={width}
            height={'1500rem'}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
        />
        <div className={classes.header}>
            <UserAvatar />
            <Title>
                Congratulations, you completed the game!
            </Title>
        </div>
        <h3 className={classes.time}>
            {dateformat(interval, 'MM:ss')}
        </h3>
        <PlayerChart
            scores={scores.player}
        />
        <PodiumList
            items={scores.top}
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

export default Resume