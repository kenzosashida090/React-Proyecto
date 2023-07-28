
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";
import  {persistStore} from "redux-persist"
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
//root-reducer
//middleWares allow us to see whats happening before hits
//the action, hits the middleWare first its a helper library
const loggerMiddleware = createLogger()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer= persistReducer(persistConfig,rootReducer)
export const store = configureStore({reducer:persistedReducer,
    middleware: [process.env.NODE_ENV ==='development' && logger,sagaMiddleware].filter(Boolean),

}
    );
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)