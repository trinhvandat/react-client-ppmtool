import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {}
const middleWare = [thunk]

let store

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        initalState,
        compose(applyMiddleware(...middleWare), 
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
        );
} else {
    store = createStore(
        rootReducer,
        initalState,
        compose(applyMiddleware(...middleWare))
        );
}

export default store;