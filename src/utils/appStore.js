import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./sidebarSlice"
import youtubeVideoReducer from "./youtubeVideoSlice"

const appStore = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        youtubeVideo: youtubeVideoReducer,
    }
})

export default appStore