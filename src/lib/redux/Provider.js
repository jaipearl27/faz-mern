"use client"; // Ensure this is a Client Component

import {
    Provider
} from "react-redux";
import {
    PersistGate
} from "redux-persist/integration/react";
import {
    store,
    persistor
} from "./store"; // Import store and persistor
import {
    injectStore
} from "@/constants/constant";

injectStore(store); // Inject store once

export function ReduxProvider({
    children
}) {
    return ( 
    <Provider store = {store}>
        <PersistGate loading = {null} persistor = {persistor}> {
            children
        } </PersistGate> 
        </Provider>
    );
}
