import React from 'react';
import './GoodCard.scss';

interface GoodCardProps {
  NAME: string;
  PRICE: string;
  DISCOUNT: string | null;
  DESCRIPTION: string | null;
  SUMMA: string;
}

const GoodCard = (props: GoodCardProps) => (
  <div className="gift-card">
    {props.DISCOUNT && <div className="card-header">{props.DISCOUNT}% OFF</div>}
    <div className="card-body">
      <h3>{props.NAME}</h3>
      {props.DESCRIPTION && <p className="description">{props.DESCRIPTION}</p>}
      {props.DISCOUNT
        ? <div className="discount">
          <span>₽{props.PRICE}</span>
          <p>₽{props.SUMMA}</p>
        </div>
        : <div className="price">₽{props.PRICE}</div>
      }
    </div>
    <div className="card-footer"/>
  </div>
);

export default GoodCard;
