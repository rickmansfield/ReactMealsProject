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
      {/* if cartIsShown is true, then show the cart */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
