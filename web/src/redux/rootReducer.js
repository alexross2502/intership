import { combineReducers } from "redux";
import modalWindowReducer from "./modalWindowReducer";
import authorizationReducer from "./authorizationReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  modalWindow: modalWindowReducer,
  authorization: authorizationReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
