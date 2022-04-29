export function mapStateToProps (state) {
  return {
    stage: state.ux.stage,
    isLoading: state.ux.isLoading,
    soccerTeams: state.teams.teams,
    currentTeam: state.currentTeam
  }
}
