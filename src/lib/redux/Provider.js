// lib/redux/Provider.js
'use client'; // Ensure this is a Client Component

import {
    Provider
} from 'react-redux';
import {
    store
} from './store';

export function ReduxProvider({
    children
}) {
    return <Provider store = {store} > {
        children} </Provider>;
}
