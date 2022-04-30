import { mapStateToProps } from './mapStateToProps'
import { initialStateMock } from '../test/fixtures/initialState'

describe('mapState should', function () {
  const mapState = mapStateToProps(initialStateMock)

  it('return the correct properties', function () {
    expect(mapState.stage).toEqual('initialList')
    expect(mapState.isLoading).toBeFalsy()
    expect(mapState.soccerTeams).toEqual([])
    expect(mapState.currentTeam).toEqual([])
  })
})
