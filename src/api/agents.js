import axios from "axios";

let agents = []

const fetchAgents = axios({
  url: "https://valorant-api.com/v1/agents",
  params: {
    isPlayableCharacter: true
  }
}).then((response) => {
  agents = response.data.data.map((agent) => ({
    displayName: agent.displayName,
    bustPortrait: agent.bustPortrait,
    background: agent.background,
    backgroundGradientColors: [agent.backgroundGradientColors]
  }))
  return agents
}).catch((err) => {
  console.log(`Error: ${err}`)
})

export default fetchAgents