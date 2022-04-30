import teams from './teams'
import { teams as mockTeams } from './../../test/fixtures/teams'

describe('Teams reducer should', function () {
  it('recieve all teams from payload', function () {
    const intialState = { teams: [] }

    const action = {
      type: 'GET_TEAMS',
      payload: mockTeams
    }

    const expectedState = mockTeams
    expect(expectedState).toEqual(teams(intialState, action))
  })
})
