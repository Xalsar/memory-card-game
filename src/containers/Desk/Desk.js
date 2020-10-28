import React from 'react'
import Card from '../../components/Card/Card'
import classes from './Desk.module.css'

const Desk = () => {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const deck = [
        {
            value: 1,
            color: '--light-orange'
        },
        {
            value: 1,
            color: '--light-orange'
        },
        {
            value: 2,
            color: '--light-pink'
        },
        {
            value: 2,
            color: '--light-pink'
        },
        {
            value: 3,
            color: '--light-blue'
        },
        {
            value: 3,
            color: '--light-blue'
        },
        {
            value: 4,
            color: '--light-green'
        },
        {
            value: 4,
            color: '--light-green'
        }
    ]

    shuffleArray(deck)

    return (
        <container className={classes.desk}>
            {deck.map((card, id) => (
                <Card
                    key={id}
                    color={card.color}
                />
            ))}
        </container>
    )
}

export default Desk