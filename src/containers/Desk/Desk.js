import React, { useEffect } from 'react'
import Card from '../../components/Card/Card'
import Timer from '../../components/Timer/Timer'
import { connect } from 'react-redux'
import classes from './Desk.module.css'

const Desk = (props) => {
    const shuffle = props.shuffle

    useEffect(() => {
        shuffle()
    }, [shuffle])

    return (
        <div className={classes.desk}>
            <div className={classes.header}>
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
        deck: state.deck.deck
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shuffle: () => dispatch({ type: 'SHUFFLE' }),
        pick: (payload) => dispatch({ type: 'PICK', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk)