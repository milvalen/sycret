import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../shared/lib/redux';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGoods} from './model';

//TODO: layout good component

export const GoodChoice: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const goods = useSelector((state: RootState) => state.good.goods);

  useEffect(() => {
    dispatch(fetchGoods())
  }, [dispatch]);

  return (
    <>
      <h1>Goods</h1>
      <div>
        {goods.map((item) => (<p key={item.ID}>{item.NAME}</p>))}
      </div>
    </>
  );
}
