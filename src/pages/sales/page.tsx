import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../shared/lib/redux';
import {Sale} from '../../features/sale/ui';
import {useNavigate} from 'react-router-dom';
import Thanks from '../../components/Thanks';

const SalesPage = () => {
  const navigate = useNavigate();
  const sale = useSelector((state: RootState) => state.sale);
  const goods = useSelector((state: RootState) => state.good.goods);

  useEffect(() => {
    if (!goods.length) navigate('/');
  }, [goods])

  if (!sale.name) return <Thanks sale={sale.sale} />;

  return (
    <>
      <h1>{sale.name}</h1>
      <p>Пожайлуста, заполните форму для завершения вашего подарочного заказа</p>
      <Sale/>
    </>
  );
}

export default SalesPage;
