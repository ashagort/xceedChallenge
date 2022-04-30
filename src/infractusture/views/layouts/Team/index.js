import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import { DataGrid } from '@mui/x-data-grid'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'

import './style.css'

function escapeRegExp (value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

function QuickSearchToolbar (props) {
  return (
      <Box
          sx={{
            p: 0.5,
            pb: 0
          }}
      >
        <TextField
            variant="standard"
            value={props.value}
            onChange={props.onChange}
            placeholder="Search…"
            InputProps={{
              startAdornment: <SearchIcon fontSize="small" />,
              endAdornment: (
                  <IconButton
                      title="Clear"
                      aria-label="Clear"
                      size="small"
                      style={{ visibility: props.value ? 'visible' : 'hidden' }}
                      onClick={props.clearSearch}
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
              )
            }}
            sx={{
              width: {
                xs: 1,
                sm: 'auto'
              },
              m: (theme) => theme.spacing(1, 0.5, 1.5),
              '& .MuiSvgIcon-root': {
                mr: 0.5
              },
              '& .MuiInput-underline:before': {
                borderBottom: 1,
                borderColor: 'divider'
              }
            }}
        />
      </Box>
  )
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export const Team = ({ currentTeam }) => {
  const agePlayer = (bith) => {
    const today = new Date()
    const bithday = new Date(bith)
    let age = today.getFullYear() - bithday.getFullYear()
    const m = today.getMonth() - bithday.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < bithday.getDate())) {
      age--
    }

    return age
  }

  const newPlayers = currentTeam.squad.map((player) => {
    const container = {}

    container.id = player.id
    container.name = player.name
    container.nationality = player.nationality
    container.position = player.position
    container.age = agePlayer(player.dateOfBirth)

    return container
  })

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1
    },
    {
      field: 'nationality',
      headerName: 'Nationality',
      flex: 1
    },
    {
      field: 'position',
      headerName: 'Position',
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 1
    }
  ]

  const [searchText, setSearchText] = React.useState('')
  const [rows, setRows] = React.useState(newPlayers)
  const [pageSize, setPageSize] = React.useState(5)

  const requestSearch = (searchValue) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = newPlayers.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field])
      })
    })
    setRows(filteredRows)
  }

  return (
      <div className={'team-container'}>
        <div className={'container'}>
          <div className={'team-title'}>
            {currentTeam.name}
            <img src={currentTeam.crestUrl} alt={currentTeam.shortname} />
          </div>
          <div className={'team-content'}>
            <Box sx={{
              height: 430,
              width: '100%',
              border: 0,
              fontFamily: 'Roboto, serif !important',
              '& .MuiDataGrid-columnHeaders': {
                color: '#b6babd',
                fontFamily: 'Roboto, serif !important',
                fontSize: '14px',
                fontWeight: '300',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.14',
                letterSpacing: '1.4px',
                textTransform: 'capitalize'
              },
              '& .MuiDataGrid-cell': {
                border: 0,
                fontFamily: 'Roboto, serif !important'
              }
            }}>
              <DataGrid
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  components={{ Toolbar: QuickSearchToolbar }}
                  rows={rows}
                  columns={columns}
                  componentsProps={{
                    toolbar: {
                      value: searchText,
                      onChange: (event) => requestSearch(event.target.value),
                      clearSearch: () => requestSearch('')
                    }
                  }}
                  rowsPerPageOptions={[5, 10, 15]}
                  pagination
                  {...newPlayers}
                  initialState={{
                    ...newPlayers.initialState,
                    pagination: {
                      pageSize: 3
                    }
                  }}
                  getRowClassName={() => 'player-rows'}
              />
            </Box>
          </div>
        </div>

      </div>
  )
}
