import axios from "axios";

let agents = []

const fetchAgents = axios({
  url: "https://valorant-api.com/v1/agents",
  params: {
    isPlayableCharacter: true,
    language: "es-ES",
  }
}).then((response) => {
  return agents = response.data.data.map((agent) => agent)
}).catch((err) => {
  throw err
})

export default fetchAgents