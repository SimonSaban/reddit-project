import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: []
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subreddits.push(action.payload);
        },
    }

});

export const { addSubreddit } = subredditsSlice.actions;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export default subredditsSlice.reducer;