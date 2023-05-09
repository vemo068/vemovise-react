import styled from '@emotion/styled'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Search = styled('div')({
  backgroundColor: '#FFF',
  width: '40%',
  padding: '0 10px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& input': {
    fontSize: '16px',
    color: '#4F4F4F',
    '&::placeholder': {
      color: '#828282',
      opacity: 1,
    },
  },
});

const MyAppBar = () => {
  return (
    <Box>
      <AppBar position="sticky" sx={{ flexGrow: 1, color: 'black', backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' , backgroundColor: '#f5f5f5',}}>
          <Typography variant='h6' color='black' fontWeight={600}  sx={
            { backgroundColor: '#f5f5f5',}
          }>
            VE-MOVIES
          </Typography>
          <Search>
            <InputBase placeholder='Search...' fullWidth='true' />
          </Search>
          <Typography variant='h6' color='black'>
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MyAppBar
