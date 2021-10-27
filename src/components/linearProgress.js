import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress  sx={{color: '#ff8e53', position:'absolute', top:'40%', left:'50%' }} />
    </Box>
  );
}
