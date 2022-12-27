import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <ContextProvider>
        {showModal && <Cart onHideModal={hideModal} />}
        <Header onShowModal={openModal} />
        <Menu />
      </ContextProvider>
    </div>
  );
}

export default App;
