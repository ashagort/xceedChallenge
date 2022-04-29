import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from './state/mapStateToProps'
import { caseStoreUse } from './useCase'
import repositoryStore from './repository/index'

import './infractusture/styles/_globals.css'
import './App.css'
import { Loader } from './infractusture/views/Commons/Loader'
import { Teams } from './infractusture/views/layouts/Teams'
import { Header } from './infractusture/views/Commons/Header'
import { Team } from './infractusture/views/layouts/Team'

const repository = repositoryStore()

const idPrimeraDivisionSpain = '2014'

const App = ({
  /* USECASE */
  getTeams,
  getTeam,
  /* MAPState */
  soccerTeams,
  isLoading,
  stage,
  currentTeam
}) => {
  const [isLoadingState, setIsLoadingState] = useState(false)

  useEffect(() => {
    (async function initialBeers () {
      setIsLoadingState(true)
      try {
        getTeams(idPrimeraDivisionSpain)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoadingState(false)
      }
    })()
  }, [])

  let component

  if (stage === 'initialList') {
    component = <Teams
        soccerTeams={soccerTeams}
        getTeam={getTeam}
    />
  }

  if (stage === 'team') {
    component = <Team
        currentTeam={currentTeam}
    />
  }

  const getLoading = () => {
    if (isLoading || isLoadingState) {
      return <Loader />
    }

    return null
  }

  const loadingComponent = getLoading()
  return (
      <div className={'app-container'}>
           <Header />
        {component}
        {loadingComponent}
      </div>
  )
}

export default connect(mapStateToProps, caseStoreUse(repository))(App)
