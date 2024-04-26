import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./sidebarSlice"
import youtubeVideoReducer from "./youtubeVideoSlice"
import serachReducer from "./searchSlice"

const appStore = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        youtubeVideo: youtubeVideoReducer,
        search: serachReducer,
    }
})

export default appStore