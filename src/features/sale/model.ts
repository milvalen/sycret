import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Good} from '../../types/GoodType';
import {Sale, SaleData} from '../../types/SaleType';
import {saleService} from '../../services/SaleService';

export const addSale = createAsyncThunk<Sale, SaleData>(
  'sales/addSale',
  (data: SaleData) => saleService.OSSale(data),
);

export const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    name: '',
    form: {} as SaleData,
    sale: '',
  },
  reducers: {
    toSale: (state, action: PayloadAction<Good>) => {
      state.name = action.payload.NAME;
      state.form = {
        Id: Number(action.payload.ID),
        TableName: action.payload.TABLENAME,
        PrimaryKey: action.payload.PRIMARYKEY,
        Price: action.payload.PRICE,
        Summa: action.payload.SUMMA,
        ClientName: '',
        Phone: '',
        Email: '',
        PaymentTypeId: 2,
        UseDelivery: 0,
      };
    },
    updateField: (
      state,
      action: PayloadAction<{ field: keyof SaleData; value: SaleData[keyof SaleData] }>
    ) => {
      (state.form[action.payload.field] as SaleData[keyof SaleData]) = action.payload.value;
    },
  },
  extraReducers: (builder) => builder.addCase(
    addSale.fulfilled,
    (state, action) => {
      state.sale = action.payload.CERTNUMBER;
    }
  )
});

export default saleSlice.reducer;
