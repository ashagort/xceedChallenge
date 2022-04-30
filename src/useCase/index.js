export const caseStoreUse = (repository) => (dispatch) => ({
  getTeams: getTeams(repository, dispatch),
  getTeam: getTeam(repository, dispatch),
  returnBack: returnBack(dispatch)
})

function getTeams (repository, dispatch) {
  return async function (id) {
    const teams = await repository.playersTeams(id)
    dispatch({
      type: 'IS_LOADING'
    })

    dispatch({
      type: 'GET_TEAMS',
      payload: teams
    })
  }
}

function getTeam (repository, dispatch) {
  return async function (id) {
    const team = await repository.getTeam(id)

    dispatch({
      type: 'GET_TEAM',
      payload: team
    })
  }
}

function returnBack (dispatch) {
  return function () {
    dispatch({
      type: 'BACK'
    })
  }
}
