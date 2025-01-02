import {Box, Typography} from '@mui/material';
import React from 'react';
import './Thanks.scss';

const Thanks = ({ sale }: { sale: string }) => (
  <Box className="sale-card">
    <Typography variant="h5">Заказ успешно отправлен</Typography>
    <Typography variant="body1" className="sale-card__thanks">Спасибо Вам за Ваш выбор</Typography>
    <Typography variant="body1" className="sale-card__misc">Уникальный номер сертификата:</Typography>
    <Typography variant="h6">{sale}</Typography>
  </Box>
);

export default Thanks;