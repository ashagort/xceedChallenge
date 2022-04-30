import mock from './../test/mockInstance'

import repository from './index'
import { teams } from '../test/fixtures/teams'
import { BASE_URL } from '../infractusture/config'

describe('Repository call endpoint for get teams', function () {
  beforeEach(function () {
    mock.reset()
  })
  it('Retrieve teams', async function () {
    const id = '2014'
    const URL = `${BASE_URL}/competitions/${id}/teams`

    mock.onGet(URL).reply(200, teams)

    const response = await repository().playersTeams(id)

    const expectedResponse = teams

    expect(response).toEqual(expectedResponse)
  })
})
