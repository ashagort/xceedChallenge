import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Teams } from './index'
import { teams } from '../../../../test/fixtures/teams'

describe('Teams view [layout]', function () {
  let wrapper
  let soccerTeams
  let getTeam

  beforeEach(() => {
    soccerTeams = teams.teams
    getTeam = jest.fn()

    wrapper = render(
            <Teams
                soccerTeams={soccerTeams}
                getTeam={getTeam}
            />
    )
  })

  it('Should title', function () {
    expect(screen.getByText('Select a team to see its roster'))
  })
  it('should teams cards', function () {
    const { container } = wrapper
    expect(container.getElementsByClassName('MuiImageListItem-root').length).toBe(20)
  })
  it('should call api team selected', function () {
    const { container } = wrapper

    const element = container.querySelectorAll('.MuiIconButton-root')

    fireEvent.click(element[0])
    expect(getTeam).toHaveBeenCalled()
  })
})
