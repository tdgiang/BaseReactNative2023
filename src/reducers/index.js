import userReducer from "./userReducer";
import { combineReducers } from "redux";
import ModalLoadingReducer from "./ModalLoading";
import SnackReducer from "./SnackReducer";
import ScreenInitReducer from "./ScreenInit";
import languageReducer from "./languageReducer";
import walletReducer from "./walletReducer";
import SystemConfigReducer from "./SystemConfigReducer";
import cartReducer from "./CartReducer";

// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  ModalLoadingReducer,
  SnackReducer,
  ScreenInitReducer,
  languageReducer,
  walletReducer,
  SystemConfigReducer,
  cartReducer,
});

export default rootReducer;
