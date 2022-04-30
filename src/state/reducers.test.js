import { reducers } from './reducers'

describe('reducers should', function () {
  it('have the right reducers', () => {
    expect(reducers.ux).toBeDefined()
    expect(reducers.teams).toBeDefined()
    expect(reducers.currentTeam).toBeDefined()
  })
})
