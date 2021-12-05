/* Pour plus d'information, veuillez regardé la documentation de Redux. */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serverId: null,
  serverName: null,
};

export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setServerInfo: (state, action) => {
      state.serverId = action.payload.serverId;
      state.serverName = action.payload.serverName;
    },
  },
});

export const { setServerInfo } = serverSlice.actions;

export const selectServerId = (state) => state.server.serverId;
export const selectServerName = (state) => state.server.serverName;

export default serverSlice.reducer;
