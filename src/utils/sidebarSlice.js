import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isSideBarOpen: true
    },

    reducers: {
        toggleSideBar: (state, action) => {
            state.isSideBarOpen = !state.isSideBarOpen
        },
    }
})

export const { toggleSideBar } = sidebarSlice.actions

export default sidebarSlice.reducer