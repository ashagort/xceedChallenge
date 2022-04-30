import mock from './../test/mockInstance'

import repository from './index'
import { team } from '../test/fixtures/team'
import { BASE_URL } from '../infractusture/config'

describe('Repository call endpoint for get teams', function () {
  beforeEach(function () {
    mock.reset()
  })
  it('Retrieve teams', async function () {
    const id = '78'
    const URL = `${BASE_URL}/teams/${id}`

    mock.onGet(URL).reply(200, team)

    const response = await repository().getTeam(id)

    const expectedResponse = team

    expect(response).toEqual(expectedResponse)
  })
})
