import {Container} from "react-bootstrap"
import {BrowserRouter as Router ,Route} from "react-router-dom";

import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import HomeScreen from "./screens/homescreen";
import ProductDetails from "./screens/productdetails";
import CartScreen from "./screens/cartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
function App() {
  return (
   <>
   <Router>
   <Header></Header>
   <main className="my-3">
    
   <Container>
   <h1>Ecommerce App</h1>
  <Route path="/" component={HomeScreen} exact></Route>
  <Route path="/login" component={LoginScreen} exact></Route>
  <Route path="/shipping" component={ShippingScreen} exact></Route>
  <Route path="/payment" component={PaymentScreen} exact></Route>

  <Route path="/placeorder" component={PlaceOrderScreen} exact></Route>

  <Route path="/order/:id" component={OrderScreen} exact></Route>

  <Route path="/profile" component={ProfileScreen} exact></Route>

  <Route path="/register" component={RegisterScreen} exact></Route>

  <Route path="/product/:id" component={ProductDetails} ></Route>
  <Route path="/cart/:id?" component={CartScreen} ></Route>

   </Container>
  
   </main>
   <Footer>

</Footer>
</Router>

   </>
  );
}

export default App;
