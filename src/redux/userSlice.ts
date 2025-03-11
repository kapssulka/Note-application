import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  userId: string | null;
}

const initialState: IUserState = {
  userId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string | null>) {
      state.userId = action.payload;
    },
  },
});
export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
