import {Box, TextField} from '@mui/material';
import React from 'react';

//todo: layout sale form

export const Sale = () => {
  return (
    <Box
      component="form"
      marginTop="2rem"
    >
      <TextField label="Имя клиента" variant="outlined" placeholder="e.g. Марк Андреев" />
    </Box>
  );
}