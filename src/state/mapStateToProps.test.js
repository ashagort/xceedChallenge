import { mapStateToProps } from './mapStateToProps'
import { initialStateMock } from '../test/fixtures/initialState'

describe('mapState should', function () {
  const mapState = mapStateToProps(initialStateMock)

  it('return the correct properties', function () {
    expect(mapState.stage).toEqual('initial')
    expect(mapState.isLoading).toBeFalsy()
    expect(mapState.beers).toEqual([])
    expect(mapState.selectedBeer).toEqual({})
    expect(mapState.numPageUser).toEqual(1)
    expect(mapState.styleView).toEqual('cards')
    expect(mapState.favoriteBeers).toEqual([])
  })
})
