import { type APIValorantResponse } from "../types/valorant.ts"

export const getAgents = async () => {
  const res = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES').then((res) => res.json())
  const { data } = res as APIValorantResponse
  return data
}
