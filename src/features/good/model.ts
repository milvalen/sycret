import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {goodService} from '../../services/GoodService';
import {Good} from '../../types/GoodType';

type Certificate = Omit<Good, 'TABLENAME' | 'PRIMARYKEY'>;

export const fetchGoods = createAsyncThunk<Certificate[]>(
  'good/fetchGoods',
  goodService.OSGetGoodList
);

const goodSlice = createSlice({
  initialState: {
    goods: [] as Certificate[]
  },
  reducers: {},
  name: 'good',
  extraReducers: (builder) => builder.addCase(
    fetchGoods.fulfilled,
    (state, action) => {
      state.goods = action.payload;
    }
  )
});

export default goodSlice.reducer;
