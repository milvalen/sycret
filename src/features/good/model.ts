import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {goodService} from '../../services/GoodService';
import {Good} from '../../types/GoodType';

export const fetchGoods = createAsyncThunk<Good[]>(
  'good/fetchGoods',
  goodService.OSGetGoodList
);

export const goodSlice = createSlice({
  initialState: {
    goods: [] as Good[]
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
