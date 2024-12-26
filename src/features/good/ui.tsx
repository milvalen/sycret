import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../shared/lib/redux';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoods} from './model';

//TODO: display fetched goods

export const GoodChoice: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const goods = useSelector((state: RootState) => state.good);

  useEffect(() => {
    dispatch(fetchGoods())
  }, [dispatch]);

  return (
    <>
      <h1>Goods</h1>
      <ul>
        {goods.map((item) => (<li key={item.ID}></li>))}
      </ul>
    </>
  );
}