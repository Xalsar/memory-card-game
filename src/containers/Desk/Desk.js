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

    useEffect(() => {
        props.setGame()
        props.setTimer()

        setTimeout(() => {
            props.hide()
        }, 3000)
    }, [])

    if (props.error) {
        props.setGame()

        setTimeout(() => {
            props.hide()
        }, 3000)
    }

    if (props.endTime) {
        history.push('/resume')
    }

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
        endTime: state.deck.endTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGame: () => dispatch({ type: 'SET_GAME' }),
        setTimer: () => dispatch({ type: 'SET_TIMER' }),
        pick: (payload) => dispatch({ type: 'PICK', payload }),
        hide: () => dispatch({ type: 'HIDE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk)