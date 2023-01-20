import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productDetailsReducer, productListReducer } from './reducers/productReducer'
import { cartReducer } from "./reducers/cartReducer";
import { userLoginReducer ,userRegisterReducer,userDetailsReducer} from "./reducers/userReducer";

const UserInfoFromStorage = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem('userInfo')):null;




const cartItemsFromStorage = localStorage.getItem("cartItems")

  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer



});

const initialState={
    cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:UserInfoFromStorage}
};
const middlewares=[thunk];
const store=createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;