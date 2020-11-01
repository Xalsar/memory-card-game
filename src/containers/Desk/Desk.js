import React, { useEffect, useCallback } from 'react'
import { useHistory } from "react-router-dom"
import Card from '../../components/Card/Card'
import Timer from '../../components/Timer/Timer'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Desk.module.css'

const Desk = (props) => {
    const deck = useSelector(state => state.deck.deck)
    const error = useSelector(state => state.deck.error)
    const firstChoice = useSelector(state => state.deck.firstChoice)
    const secondChoice = useSelector(state => state.deck.secondChoice)
    const show = useSelector(state => state.deck.show)
    const continueGame = useSelector(state => state.deck.continueGame)
    const userName = useSelector(state => state.user.name)

    const dispatch = useDispatch()
    const setGame = useCallback(() => dispatch({ type: 'SET_GAME' }), [dispatch])
    const setGameAndTimer = useCallback(() => dispatch({ type: 'SET_GAME_AND_TIMER' }), [dispatch])
    const pick = useCallback((payload) => dispatch({ type: 'PICK', payload }), [dispatch])
    const hide = useCallback(() => dispatch({ type: 'HIDE' }), [dispatch])

    const history = useHistory()

    useEffect(() => {
        if (!userName) {
            history.push('/')
        } else if (continueGame) {
            setGameAndTimer()

            setTimeout(() => {
                hide()
            }, 3000)
        } else {
            history.push('/resume')
        }
    }, [userName, continueGame, setGameAndTimer, hide])

    useEffect(() => {
        if (error) {
            setGame()

            setTimeout(() => {
                hide()
            }, 3000)
        }
    }, [error, setGame, hide])

    return (
        <Container>
            <div className={classes.header}>
                <UserAvatar />
                <div className={classes.infoPanel}>
                    <Title>
                        Come on, you can do it, I belive in you :)
                    </Title>
                </div>
                <Timer />
            </div>
            <div className={classes.cardsContainer}>
                {deck.map((card) => (
                    <Card
                        key={card.id}
                        hidden={
                            firstChoice.id !== card.id &&
                            secondChoice.id !== card.id &&
                            !show &&
                            !card.found
                        }
                        color={card.color}
                        click={() => pick(card.id)}
                        active={card.found}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Desk