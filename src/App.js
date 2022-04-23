import React, { useState} from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Cartprovider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShowing] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShowing(true);
  };

  const hideCartHandler = () => { 
    setCartIsShowing(false);
  }
  return (
    <Cartprovider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
