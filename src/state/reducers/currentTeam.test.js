import currentTeam from './currentTeam'
import { team as mockTeam } from '../../test/fixtures/team'

describe('CurrentTeams reducer should', function () {
  it('recieve team from payload', function () {
    const initialState = { }

    const action = {
      type: 'GET_TEAM',
      payload: mockTeam
    }

    const expectedState = mockTeam
    expect(expectedState).toEqual(currentTeam(initialState, action))
  })
})
