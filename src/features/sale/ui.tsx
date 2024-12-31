import {Box, Button, ButtonGroup, InputAdornment, TextField} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import * as style from '../../styles/sale.module.scss';

//todo: validate form values

export const Sale = () => {
  return (
    <Box
      className={style.sale}
      component="form"
    >
      <TextField label="Имя клиента" id="name" variant="filled" placeholder="e.g., Марк Андреев" />
      <TextField
        label="Телефон"
        id="phone"
        placeholder="e.g., 9161237589"
        variant="filled"
        // (\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">+7</InputAdornment>,
          },
        }}
      />
      <TextField
        id="Email"
        label="Email"
        placeholder="e.g., example@email.com"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <div className={style.choice}>
        <p>Это подарок?</p>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>Да</Button>
          <Button>Нет</Button>
        </ButtonGroup>
      </div>
      <TextField
        id="msgText"
        label="Текст сообщения"
        multiline
        rows={4}
        placeholder="Написать личное сообщение получателю"
        variant="filled"
      />
      <TextField label="Имя получателя" id="pName" variant="filled" placeholder="e.g., Валерия Андреева" />
      <TextField
        label="Телефон получателя"
        id="pPhone"
        placeholder="e.g., 9161237589"
        variant="filled"
        // (\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">+7</InputAdornment>,
          },
        }}
      />
      <Button variant="contained">Подтвердить</Button>
    </Box>
  );
}