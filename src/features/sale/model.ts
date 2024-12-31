import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Good} from '../../types/GoodType';
import {SaleData} from '../../types/SaleType';

export const saleSlice = createSlice({
  initialState: {
    data: {} as SaleData & { Name: string },
  },
  reducers: {
    toSale: (state, action: PayloadAction<Good>) => {
      state.data = {
        Id: Number(action.payload.ID),
        Name: action.payload.NAME,
        TableName: action.payload.TABLENAME,
        PrimaryKey: action.payload.PRIMARYKEY,
        Price: Number(action.payload.PRICE),
        Summa: Number(action.payload.SUMMA),
        ClientName: '',
        Phone: '',
        Email: '',
      };
    }
  },
  name: 'sale',
});

export default saleSlice.reducer;