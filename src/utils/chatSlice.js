import { createSlice } from "@reduxjs/toolkit";
import { live_chat_position } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        message: []
    },

    reducers: {
        addMessage: (state, action) => {
            state.message.splice(live_chat_position, 1)
            state.message.unshift(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer