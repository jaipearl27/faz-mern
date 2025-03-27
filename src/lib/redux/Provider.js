"use client"; // Ensure this is a Client Component

import {
    Provider
} from "react-redux";
import {
    PersistGate
} from "redux-persist/integration/react";
 
import {
    injectStore
} from "@/constants/constant";
import { persistor, store } from "./store";

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
