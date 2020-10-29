import React from 'react'
import PodiumList from '../../components/PodiumList/PodiumList'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import classes from './Resume.module.css'

const Resume = () => {
    return <Container>
        <Title>
            Congratulations you have finished the game with a supertime of:
        </Title>
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