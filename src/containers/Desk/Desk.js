import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Card from '../../components/Card/Card'
import Timer from '../../components/Timer/Timer'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { connect } from 'react-redux'
import classes from './Desk.module.css'

const Desk = (props) => {
    const history = useHistory()
    const { userName, continueGame, setGameAndTimer, error, setGame, hide } = props

    useEffect(() => {
        if (!userName) {
            history.push('/')
        } else if (continueGame) {
            setGameAndTimer()

            setTimeout(() => {
                hide()
            }, 3000)
        }
    }, [userName, continueGame, setGameAndTimer, hide])

    useEffect(() => {
        if (!continueGame) {
            history.push('/resume')
        }

        if (error) {
            setGame()

            setTimeout(() => {
                hide()
            }, 3000)
        }
    }, [error, continueGame, setGame, hide])

    const message = !props.error ? "Come on, you can do it, I belive in you :)" : "Error commited, try again ;)"

    return (
        <Container>
            <div className={classes.header}>
                <UserAvatar />
                <div className={classes.infoPanel}>
                    <Title>{message}</Title>
                </div>
                <Timer />
            </div>
            <div className={classes.cardsContainer}>
                {props.deck.map((card) => (
                    <Card
                        key={card.id}
                        hidden={
                            props.firstChoice.id !== card.id &&
                            props.secondChoice.id !== card.id &&
                            !props.show &&
                            !card.found
                        }
                        color={card.color}
                        click={() => props.pick(card.id)}
                        active={card.found}
                    />
                ))}
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        deck: state.deck.deck,
        error: state.deck.error,
        firstChoice: state.deck.firstChoice,
        secondChoice: state.deck.secondChoice,
        show: state.deck.show,
        continueGame: state.deck.continueGame,
        userName: state.user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGame: () => dispatch({ type: 'SET_GAME' }),
        setTimer: () => dispatch({ type: 'SET_TIMER' }),
        setGameAndTimer: () => dispatch({ type: 'SET_GAME_AND_TIMER' }),
        pick: (payload) => dispatch({ type: 'PICK', payload }),
        hide: () => dispatch({ type: 'HIDE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk)