import React from 'react'
import PodiumList from '../../components/PodiumList/PodiumList'
import Container from '../../components/Container/Container'
import classes from './Resume.module.css'

const Resume = () => {
    return <Container>
        <h2 className={classes.title}>
            Congratulations you have finished the game with a supertime of:
        </h2>
        <h3 className={classes.time}>
            00:20
        </h3>
        <PodiumList
            items={[
                {
                    name: "Morris Kline",
                    time: "00:15"
                },
                {
                    name: "Bruce wayne",
                    time: "00:15"
                },
                {
                    name: "HP Lovecraft",
                    time: "00:15"
                },
                {
                    name: "Ray Bradburry",
                    time: "00:15"
                },
                {
                    name: "Phillip K Dick",
                    time: "00:15"
                },
                {
                    name: "Robert E. Howard",
                    time: "00:15"
                }
            ]}
        />
    </Container>
}

export default Resume