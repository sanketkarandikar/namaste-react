import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const AppStore = configureStore({
    reducer: {
        cartSlice
    }
});

export default AppStore;