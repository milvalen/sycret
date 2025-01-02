import {Box, Button, ButtonGroup, InputAdornment, TextField} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import React, {useState} from 'react';
import * as style from '../../styles/sale.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../shared/lib/redux';
import {addSale, saleSlice} from './model';
import {SaleValidation} from '../../types/SaleType';
import {handleZodValidation, ValidationError} from '../../shared/lib/zod';

export const Sale = () => {
  const form = useSelector((state: RootState) => state.sale.form);
  const [errors, setErrors] = useState<ValidationError<typeof SaleValidation>>({})
  const dispatch = useDispatch<AppDispatch>();

  function handleChange(field: keyof typeof form, value: string | number) {
    dispatch(saleSlice.actions.updateField({field, value: value}));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleZodValidation({
      onError: setErrors,
      data: form,
      onSuccess: () => dispatch(addSale(form)),
      schema: SaleValidation,
    });
  };

  return (
    <Box
      onSubmit={handleSubmit}
      className={style.sale}
      component="form"
    >
      <TextField
        onChange={(e) => handleChange('ClientName', e.target.value)}
        helperText={errors.ClientName}
        placeholder="e.g., Марк Андреев"
        label="Имя клиента"
        variant="filled"
        error={!!errors.ClientName}
        required
      />
      <TextField
        onChange={(e) => handleChange('Phone', e.target.value)}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">+7</InputAdornment>,
          },
        }}
        helperText={errors.Phone}
        placeholder="e.g., 9161237589"
        label="Телефон"
        variant="filled"
        error={!!errors.Phone}
        required
      />
      <TextField
        onChange={(e) => handleChange('Email', e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          },
        }}
        placeholder="e.g., example@email.com"
        helperText={errors.Email}
        variant="filled"
        label="Email"
        error={!!errors.Email}
        required
      />
      <div className={style.choice}>
        <p>Это подарок?</p>
        <ButtonGroup orientation="vertical" variant="contained">
          <Button
            color={form.IsGift === 1 ? 'secondary' : 'primary'}
            onClick={() => handleChange('IsGift', 1)}
          >
            Да
          </Button>
          <Button
            color={form.IsGift !== 1 ? 'secondary' : 'primary'}
            onClick={() => handleChange('IsGift', 0)}
          >
            Нет
          </Button>
        </ButtonGroup>
      </div>
      {form.IsGift === 1 && (<>
        <TextField
          onChange={(e) => handleChange('MsgText', e.target.value)}
          placeholder="Написать личное сообщение получателю"
          label="Текст сообщения"
          variant="filled"
          rows={4}
          multiline
        />
        <TextField
          onChange={(e) => handleChange('PName', e.target.value)}
          placeholder="e.g., Валерия Андреева"
          label="Имя получателя"
          variant="filled"
        />
        <TextField
          onChange={(e) => handleChange('PPhone', e.target.value)}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">+7</InputAdornment>,
            },
          }}
          helperText={errors.PPhone}
          placeholder="e.g., 9161237589"
          label="Телефон получателя"
          variant="filled"
          error={!!errors.PPhone}
        />
      </>)}
      <Button variant="contained" type="submit">Подтвердить</Button>
    </Box>
  );
};
