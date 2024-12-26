import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {goodService} from '../../services/GoodService';
import {Good} from '../../types/GoodType';

type Certificate = Omit<Good, 'TABLENAME' | 'PRIMARYKEY'>;

export const fetchGoods = createAsyncThunk<Certificate[]>(
  'goods/fetchGoods',
  goodService.OSGetGoodList
);

const goodSlice = createSlice({
  initialState: [] as Certificate[],
  name: 'good',
  reducers: {},
});

export default goodSlice.reducer;
