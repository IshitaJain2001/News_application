import { configureStore } from "@reduxjs/toolkit";
import { reducerfn } from "./Reducer";
import createSagaMiddleware from 'redux-saga'
import { fetchNews } from "./Saga";
const sagaMiddleware = createSagaMiddleware()
export const Store= configureStore(
    {
       reducer:reducerfn,
       middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
       devTools:true
    }
)
sagaMiddleware.run(fetchNews)