import React from 'react'
import { useHistory } from "react-router-dom"
import PodiumList from '../../components/PodiumList/PodiumList'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import classes from './Resume.module.css'

const Resume = () => {
    const history = useHistory()

    return <Container>
        <div className={classes.header}>
            <UserAvatar/>
            <Title>
                Congratulations, you completed the game!
            </Title>
        </div>
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