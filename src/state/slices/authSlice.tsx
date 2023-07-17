import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type AuthState = {
  user: string | null;
};

const initialState: AuthState = {
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const {setCredentials} = slice.actions;

export default slice.reducer;
