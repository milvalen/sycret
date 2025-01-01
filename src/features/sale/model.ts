import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Good} from '../../types/GoodType';
import {SaleData} from '../../types/SaleType';

type FormData = SaleData & { Name: string };

export const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    form: {} as FormData,
  },
  reducers: {
    toSale: (state, action: PayloadAction<Good>) => {
      state.form = {
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
    },
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormData; value: FormData[keyof FormData] }>
    ) => {
      (state.form[action.payload.field] as FormData[keyof FormData]) = action.payload.value;
    },
  },
});

export default saleSlice.reducer;
