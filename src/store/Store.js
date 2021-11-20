import { configureStore } from "@reduxjs/toolkit";
import serverReducer from "./ServerSlice";
import channelReducer from './ChannelSlice'
export const store = configureStore({
  reducer: {
    server: serverReducer,
    channel: channelReducer,
  },
});