export default function ux (state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'IS_LOADING':
      return { ...newState, isLoading: true }
    case 'GET_TEAMS':
      return { ...newState, isLoading: false, stage: 'initialList' }
    case 'GET_TEAM':
      return { ...newState, stage: 'team' }
    case 'BACK':
      return { ...newState, stage: 'initialList' }
    default:
      return newState
  }
}
