import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

//Slices
import userInformationReducer from "./reducers/user/UserInformationSlice";
import checkoutInformationReducer from "./reducers/checkout/checkoutInformationSlice";

const persistConfig = {
  key: "enarm-platform",
  storage,
};

const reducers = combineReducers({
  user: userInformationReducer,
  checkout: checkoutInformationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const persist = persistedReducer;

export default configureStore({
  reducer: persist,
  middleware: [thunk],
});
