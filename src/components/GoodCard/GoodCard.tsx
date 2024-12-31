import React from 'react';
import './GoodCard.scss';
import {Card, CardActionArea, CardContent, Typography} from '@mui/material';

interface GoodCardProps {
  NAME: string;
  PRICE: string;
  DISCOUNT: string | null;
  DESCRIPTION: string | null;
  SUMMA: string;
  onClick: (event: React.MouseEvent) => void;
}

const GoodCard = (props: GoodCardProps) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea onClick={props.onClick}>
      <CardContent>
        {props.DISCOUNT
          && <div className="card-header">
            <div className="discount">{props.DISCOUNT}% OFF</div>
          </div>
        }
        <Typography gutterBottom variant="h5" component="div" textAlign="center">{props.NAME}</Typography>
        {props.DESCRIPTION
          && <Typography variant="body2" sx={{ color: 'text.secondary' }}>{props.DESCRIPTION}</Typography>
        }
        <div className="price">
          {props.DISCOUNT && <span>₽{props.PRICE}</span>}
          <p>₽{props.SUMMA}</p>
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default GoodCard;
