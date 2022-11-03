import { createSlice } from "@reduxjs/toolkit";
export const sortList = [
  {
    id: 0,
    name: "price ASC",
    value: "price",
  },
  {
    id: 1,
    name: "price DESC",
    value: "-price",
  },
  {
    id: 2,
    name: "rate ASC",
    value: "rating",
  },
  {
    id: 3,
    name: "rate DESC",
    value: "-rating",
  },
  {
    id: 4,
    name: "name ASC",
    value: "title",
  },
  {
    id: 5,
    name: "name DESC",
    value: "-title",
  },
];

const initialState = {
  categoryId: 0,
  sort: sortList[0],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      console.log(action.payload);
      state.sort = sortList[action.payload];
    },
    setFilters(state, action) {
      console.log(action.payload);
      state.categoryId = action.payload.isActive;
      state.sort = sortList[action.payload.sort.id];
    },
  },
});

export const { setCategoryId, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
