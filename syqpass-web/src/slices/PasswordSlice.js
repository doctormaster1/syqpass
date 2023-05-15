import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../services/PasswordService";

const initialState = [];

export const createPassword = createAsyncThunk(
  "password/create",
  async ({ data }) => {
    const res = await Service.create(data);
    return res.data;
  }
);

export const updatePassword = createAsyncThunk(
  "password/update",
  async ({ id, data }) => {
    const res = await Service.update(id, data);
    return res.data;
  }
);

export const deletePassword = createAsyncThunk(
  "password/delete",
  async ({ id }) => {
    const res = await Service.remove(id);
    return { id };
  }
);

export const retrievePassword = createAsyncThunk(
  "password/retrieve",
  async () => {
    const res = await Service.getAll();
    return res.data.data;
  }
);

const passwordSlice = createSlice({
  name: "password",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createPassword.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(retrievePassword.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        const index = state.findIndex(
          (tutorial) => tutorial.id === action.payload.id
        );
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      })
      .addCase(deletePassword.fulfilled, (state, action) => {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      });
  },
});

const { reducer } = passwordSlice;
export default reducer;
