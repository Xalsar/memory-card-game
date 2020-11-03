import axios from 'axios'

/*

Kotlin compatible async function

*/

const registerAndList = async (props) => {
    const playerId = props.player
    const scoreTime = props.score

    let player = await axios.get(`/api/users/search/findByName?name=${player}`)
    if (!player) {
        player = await axios.post('/api/users', {
            name: playerId
        })
    }

    await axios.post('/api/posts/', {
        playerId,
        score: scoreTime
    })

    const topScores = await axios.get(`/api/scores?sort`).sort((a, b) => {
        return a.score - b.score
    })

    return {
        top: topScores
    }
}

export default registerAndList