import React, { useState } from 'react';
import Anasayfa from './Anasayfa';
import Yardım from './Yardım';
import Sipariş from './Siparis';
import { OrderPopup } from "./popup/order";
import { HelpPopup } from "./popup/help";
import './App.css';

const App = () => {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const [helpPopupOpen, setHelpPopupOpen] = useState(false);

  const onOrderPopupClose = () => {
    setOrderPopupOpen(false);
  }
  const onHelpPopupClose = () => {
    setHelpPopupOpen(false);
  }
  return (
      <div>
        <div classname="header">
          <nav className="navbar-expand">
            <ul className="navbar-nav">
              <li onClick={() => {setOrderPopupOpen(true)}}>Sipariş</li>
            </ul>
            <div className="right-to">
              <ul>
                <li onClick={() => {setHelpPopupOpen(true)}}>Yardım</li>
              </ul>
            </div>
          </nav>
        <Anasayfa />
        {orderPopupOpen && <OrderPopup onClose={onOrderPopupClose} />}
        {helpPopupOpen && <HelpPopup  onClose={onHelpPopupClose} />}
        </div>
      </div>

    );
}

export default App;