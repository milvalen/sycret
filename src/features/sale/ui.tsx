import {Box, Button, ButtonGroup, InputAdornment, TextField} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import * as style from '../../styles/sale.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../shared/lib/redux';
import {saleSlice} from './model';

export const Sale = () => {
  const dispatch = useDispatch<AppDispatch>();
  const form = useSelector((state: RootState) => state.sale.form);

  const handleChange = (
    field: keyof typeof form
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(saleSlice.actions.updateField({ field, value: e.target.value }))
  };

  return (
    <Box
      className={style.sale}
      component="form"
    >
      <TextField required label="Имя клиента" id="name" variant="filled" placeholder="e.g., Марк Андреев" />
      <TextField
        required
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
        required
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
        <ButtonGroup
          onChange={(e) => handleChange('IsGift')}
          variant="contained"
          orientation="vertical"
        >
          <Button value={1}>Да</Button>
          <Button value={0}>Нет</Button>
        </ButtonGroup>
      </div>
      {form.IsGift && (<>
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
      </>)}
      <Button type="submit" variant="contained">Подтвердить</Button>
    </Box>
  );
}