import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../shared/lib/redux';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoods} from './model';
import GoodCard from '../../components/GoodCard';
import * as style from '../../styles/good.module.scss';

export const GoodChoice: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const goods = useSelector((state: RootState) => state.good.goods);

  useEffect(() => {
    dispatch(fetchGoods())
  }, [dispatch]);

  return (
    <div className={style.gridContainer}>
      {goods.map(
        (item) => <GoodCard
          NAME={item.NAME}
          PRICE={item.PRICE}
          DISCOUNT={item.DISCOUNT}
          DESCRIPTION={item.DESCRIPTION}
          SUMMA={item.SUMMA}
        />
      )}
    </div>
  );
}
