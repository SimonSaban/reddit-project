import { configureStore } from "@reduxjs/toolkit";
import { subredditsSlice } from '../Features/subredditsSlice';
export default configureStore({
    reducer: {
        subreddits: subredditsSlice,
    }
});