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

        closeSidebar: (state, action) => {
            state.isSideBarOpen = false
        }
    }
})

export const { toggleSideBar, closeSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer