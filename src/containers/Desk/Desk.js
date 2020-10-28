import React, { useEffect } from 'react'
import Card from '../../components/Card/Card'
import Timer from '../../components/Timer/Timer'
import { connect } from 'react-redux'
import classes from './Desk.module.css'

const Desk = (props) => {
    const setGame = props.setGame

    useEffect(() => {
        setGame()
    }, [setGame])

    if(props.error) {
        setTimeout(() => {
            setGame()
        }, 1500)
    }

    const message = !props.error ? "Come on, you can do it, I belive in you :)" : "Error commited, try again ;)"

    return (
        <div className={classes.desk}>
            <div className={classes.header}>
                <div>
                    U
                </div>
                <h3 className={classes.infoPanel}>
                    {message}
                </h3>
                <Timer />
            </div>
            <div className={classes.cardsContainer}>
                {props.deck.map((card) => (
                    <Card
                        key={card.id}
                        color={card.color}
                        click={() => props.pick(card.id)}
                        active={card.found}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        deck: state.deck.deck,
        error: state.deck.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGame: () => dispatch({ type: 'SET_GAME' }),
        pick: (payload) => dispatch({ type: 'PICK', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk)