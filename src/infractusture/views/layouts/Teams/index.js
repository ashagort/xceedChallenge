import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

import './style.css'

export const Teams = ({ soccerTeams, getTeam }) => {
  const cardsTeam = () => {
    return soccerTeams.map((team, id) => {
      return (
          <ImageListItem key={id} >
              <img
                  src={`${team.crestUrl}?w=248&fit=crop&auto=format`}
                  srcSet={`${team.crestUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={team.name}
                  loading="lazy"
              />
              <ImageListItemBar
                  title={team.name}
                  actionIcon={
                      <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${team.shortName}`}
                          onClick={() => getTeam(team.id)}
                      >
                          <InfoIcon />
                      </IconButton>
                  }
              />
          </ImageListItem>
      )
    })
  }

  return <div className={'teams-container'}>
      <div className={'content'}>
          <div className={'team-title'}>Select a team to see its roster</div>
          <div className={'list-teams'}>
              <ImageList sx={{ width: 500, height: 450 }}>
                  {cardsTeam()}
              </ImageList>
          </div>
      </div>
  </div>
}
