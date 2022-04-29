export default function teams (state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'GET_TEAMS':
      return { ...newState, ...action.payload }
    default:
      return newState
  }
}
