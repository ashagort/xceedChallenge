import ux from './ux'

describe('Ux reducer should', function () {
  it('Sets loading', function () {
    const initialState = { isLoading: false }

    const action = {
      type: 'IS_LOADING'
    }

    const expectedState = { isLoading: true }

    expect(expectedState).toEqual(ux(initialState, action))
  })
  it('Get Teams change loading and stage', function () {
    const intialState = { isLoading: true, stage: '' }

    const action = {
      type: 'GET_TEAMS'
    }

    const expectedState = { isLoading: false, stage: 'initialList' }
    expect(expectedState).toEqual(ux(intialState, action))
  })
  it('Get Team change stage', function () {
    const intialState = { stage: 'initialstage' }

    const action = {
      type: 'GET_TEAM'
    }

    const expectedState = { stage: 'team' }
    expect(expectedState).toEqual(ux(intialState, action))
  })
})
