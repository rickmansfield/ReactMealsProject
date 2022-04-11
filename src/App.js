import React, { useState} from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Cartprovider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShowing] = useState(false);
  
  const showCartHander = () => {
    setCartIsShowing(true);
  };

  const hideCartHander = () => { 
    setCartIsShowing(false);
  }
  return (
    <Cartprovider>
      {cartIsShown && <Cart onHideCart={ hideCartHander} />}
      <Header onShowCart={showCartHander} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
