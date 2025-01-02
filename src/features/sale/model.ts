import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Good} from '../../types/GoodType';
import {SaleData} from '../../types/SaleType';

export const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    name: '',
    form: {} as SaleData,
  },
  reducers: {
    toSale: (state, action: PayloadAction<Good>) => {
      state.name = action.payload.NAME;
      state.form = {
        Id: Number(action.payload.ID),
        TableName: action.payload.TABLENAME,
        PrimaryKey: action.payload.PRIMARYKEY,
        Price: Number(action.payload.PRICE),
        Summa: Number(action.payload.SUMMA),
        ClientName: '',
        Phone: '',
        Email: '',
      };
    },
    updateField: (
      state,
      action: PayloadAction<{ field: keyof SaleData; value: SaleData[keyof SaleData] }>
    ) => {
      (state.form[action.payload.field] as SaleData[keyof SaleData]) = action.payload.value;
    },
  },
});

export default saleSlice.reducer;
