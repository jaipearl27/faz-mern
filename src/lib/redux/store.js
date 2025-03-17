import {
    configureStore,
    combineReducers
} from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore
} from "redux-persist";
import storage from "../util/customStorage"
import {
    encryptTransform
} from "redux-persist-transform-encrypt";
import rootReducer from "./slices"; // Import combined reducers

// Custom root reducer handling a clear action
const rootReducerWithClear = (state, action) => {
    if (action.type === "faz/clearReduxState") {
        state = undefined;
        localStorage.clear();
        sessionStorage.clear();
    }
    return rootReducer(state, action);
};

// Redux-persist configuration
const persistConfig = {
    key: "FazClientPanel", // Ensure unique key
    version: 1,
    storage,
    transforms: [
        encryptTransform({
            secretKey: `abcdefghi123489`,
            onError: (err) => {
                console.error("Persist Transform Error:", err);
            },
        }),
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducerWithClear);

// Configure Redux store
export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Avoid errors with non-serializable values
        }),
});

// Persist store instance
export const persistor = persistStore(store);
