import React from 'react';

import { Box, Stack } from '@mui/material';
import MyAppBar from './components/appbar';
import Sidebar from './components/sidebar';
import Feed from './components/feed';


function App() {
  return (
 <Box >
 <MyAppBar/>
 <Stack direction="row" spacing={2} >
 <Sidebar/>
 <Feed/>
 </Stack>
 </Box>
  );
}


export default App;
