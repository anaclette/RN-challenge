import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type AuthState = {
  user: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null} as AuthState,
  reducers: {
    setCredentials: (
      state,
      {payload: {user}}: PayloadAction<{user: string | null}>,
    ) => {
      state.user = user;
    },
  },
});

export const {setCredentials} = slice.actions;

export default slice.reducer;
