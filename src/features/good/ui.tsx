import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../shared/lib/redux';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoods} from './model';
import GoodCard from '../../components/GoodCard';
import * as style from '../../styles/good.module.scss';
import {CircularProgress} from '@mui/material';
import {Good} from '../../types/GoodType';
import {saleSlice} from '../sale/model';
import {useNavigate} from 'react-router-dom';

export const GoodChoice = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const goods = useSelector(
    (state: RootState) => state.good.goods
  );

  function handleClick(good: Good) {
    dispatch(saleSlice.actions.toSale(good));
    navigate('/sales');
  }

  useEffect(() => {
    dispatch(fetchGoods())
  }, [dispatch]);

  if (!goods.length) return <CircularProgress />;

  return (
    <div className={style.gridContainer}>
      {goods.map(
        (item) => <GoodCard
          key={`good-card#${item.ID}`}
          NAME={item.NAME}
          PRICE={item.PRICE}
          DISCOUNT={item.DISCOUNT}
          DESCRIPTION={item.DESCRIPTION}
          SUMMA={item.SUMMA}
          onClick={() => handleClick(item)}
        />
      )}
    </div>
  );
}
