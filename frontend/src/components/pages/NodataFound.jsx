import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const NodataFound = () => {
  return (
    <div><Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Typography variant="h5" color="textSecondary">
      No data found
    </Typography>
  </Box></div>
  )
}
