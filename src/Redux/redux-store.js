import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reduser";




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app:appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;