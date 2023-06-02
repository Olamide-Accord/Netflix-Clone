import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
};

const ListSlice = createSlice({
  name: 'List',
  initialState,
  reducers: {
    addToList: (state, {payload}) => {
      state.list = payload;
    }
  }
})

export const { addToList } = ListSlice.actions;
export default ListSlice.reducer;