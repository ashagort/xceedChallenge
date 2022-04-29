export default function currentTeam (state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'GET_TEAM':
      return { ...newState, ...action.payload }
    default:
      return newState
  }
}
