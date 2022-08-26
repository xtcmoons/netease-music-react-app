import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchBanner } from './homeAPI';

export interface HomeState {
  banner: any[];
  personalized: any[];
  loading: boolean;
}

const initialState: HomeState = {
  banner: [],
  personalized: [],
  loading: false,
};

export const bannerAsync = createAsyncThunk('home/banner', async () => {
  const res = await fetchBanner();
  console.log(res);
  return res.data;
});

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setBanner: (state, action) => {
      state.banner = action.payload;
    },
    setPersonalized: (state, action) => {
      state.personalized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bannerAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(bannerAsync.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(bannerAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.banner = action.payload;
    });
  },
});

export const { setBanner, setPersonalized } = homeSlice.actions;

export default homeSlice.reducer;
