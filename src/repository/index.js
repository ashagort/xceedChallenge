import * as axios from 'axios'
import { BASE_URL, CLIENT_SECRET } from '../infractusture/config'

export default function () {
  return {
    playersTeams,
    getTeam
  }
}

async function playersTeams (id) {
  let data = {}
  const URL = `${BASE_URL}/competitions/${id}/teams`

  const config = {
    headers: {
      'X-Auth-Token': CLIENT_SECRET
    }
  }

  try {
    const response = await axios.get(URL, config)
    if (response.status === 200) data = response.data
  } catch (e) {
    console.error(e, 'Error get Teams')
  }
  return data
}

async function getTeam (id) {
  let data = {}

  const URL = `${BASE_URL}/teams/${id}`

  const config = {
    headers: {
      'X-Auth-Token': CLIENT_SECRET
    }
  }
  try {
    const response = await axios.get(URL, config)
    if (response.status === 200) data = response.data
  } catch (e) {
    console.error(e, 'Error get Teams')
  }
  return data
}
