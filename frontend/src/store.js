import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productDetailsReducer, productListReducer } from './reducers/productReducer'
import { cartReducer } from "./reducers/cartReducer";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./reducers/orderReducer";
import { userLoginReducer ,userRegisterReducer,userDetailsReducer, userUpdateProfileReducer} from "./reducers/userReducer";
const shippingAddressFromStorage=localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}

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
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer





});

const initialState={
    cart:{cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage},
    userLogin:{userInfo:UserInfoFromStorage}
};
const middlewares=[thunk];
const store=createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
