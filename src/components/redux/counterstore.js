import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducer";
import { authReducer } from "./authReducer";
import { usersRedcucer } from "./usersReducer";
import { thunk } from "redux-thunk";

// This one is used when you have multiple reducers, which is common while developing.
export const rootReducers = combineReducers({
    counter:counterReducer,
    auth:authReducer,
    users:usersRedcucer,
})

// This is used only when you have only one state, 
// export const store = createStore(counterReducer)

export const store = createStore(rootReducers, applyMiddleware(thunk))
