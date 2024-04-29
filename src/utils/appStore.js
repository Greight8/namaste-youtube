import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./sidebarSlice"
import youtubeVideoReducer from "./youtubeVideoSlice"
import serachReducer from "./searchSlice"
import chatReducer from "./chatSlice"

const appStore = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        youtubeVideo: youtubeVideoReducer,
        search: serachReducer,
        chat: chatReducer,
    }
})

export default appStore