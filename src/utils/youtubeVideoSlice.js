import { createSlice } from "@reduxjs/toolkit";

const youtubeVideoSlice = createSlice({
    name: "youtubeVideo",
    initialState: {
        youtubeVideoData: null,
    },

    reducers: {
        addYoutubeVideo: (state, action) => {
            state.youtubeVideoData = action.payload
        }
    }
})

export const { addYoutubeVideo } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer
