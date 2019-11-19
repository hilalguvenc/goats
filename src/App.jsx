import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Anasayfa from './Anasayfa';
import { OrderPopup } from "./popup/order";
import { HelpPopup } from "./popup/help";
import Benefits from "./card/benefits";
import About from "./card/about";
import Transport from "./card/transport";
import Why from "./card/why";
import './App.css';

const App = () => {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const [helpPopupOpen, setHelpPopupOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);


  const onOrderPopupClose = () => {
    setOrderPopupOpen(false);
  }
  const onHelpPopupClose = () => {
    setHelpPopupOpen(false);
  }
  const onBenefitsClose = () => {
    setBenefitsOpen(false);
  }
  const onAboutClose = () => {
    setAboutOpen(false);
  }
  const onTransportClose = () => {
    setTransportOpen(false);
  }
  const onWhyClose = () => {
    setWhyOpen(false);
  }
  
  
  
  return (
         <div>
        <div className="header">
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
        {benefitsOpen && <Benefits onClose={onBenefitsClose} />}
        {aboutOpen && <About onClose={onAboutClose} />}
        {transportOpen && <Transport onClose={onTransportClose} />}
        {whyOpen && <Why onClose={onWhyClose} />}
        </div>
                    
                     <div className="row">
                     <div className="column">
                     <div className="card">
                     <ul>
                     <li className="card1" onClick={() => {setBenefitsOpen(true)}} >
                     <h3 >Keçi Sütünün Faydaları</h3>
                     <p>"Keçi sütünün bağışıklığı güçlendirme, metabolizmayı hızlandırma, kalp sağlığını koruma, kemikleri güçlendirme, kilo vermeye yardımcı olma gibi etkileri vardır." </p>
                     </li>
                     </ul> 
                     </div>
                     </div>
                     </div>

                     <div className="column">
                     <div className="card">
                     <ul>
                     <li className="card2" onClick={() => {setAboutOpen(true)}} >
                     <h3>Neden Keçi Sütü.Com?</h3>
                     <p>Hijyenik, içerisinde katkı maddesi olmayan sütlerimizle %100 güven teşkil ediyoruz. </p>
                     </li>
                     </ul>
                     </div>
                     </div>
                     
                    <div className="column">
                    <div className="card">
                    <ul>
                    <li className="card3" onClick={() => {setTransportOpen(true)}} >
                    <h3>Aynı gün, kapınıza ücretsiz teslim!</h3>
                    <p>Keçi Sütü.Com dan verdiğiniz siparişler istediğiniz saatte kapınıza ücretsiz teslim edilmektedir.</p>
                    </li>
                    </ul>
                   </div>
                   </div>
        
                   <div className="column">
                   <div className="card">
                   <ul>
                   <li className="card4" onClick={() => {setWhyOpen(true)}} >
                   <h3>Biz Kimiz?</h3>
                   <p>Yıllardır edinmiş olduğumuz tecrübe ile hijyenik, doğal keçi sütünü çiftlikten kapınıza getiriyoruz.</p>
                   </li>
                   </ul>
                  </div>         
                  </div>
                  </div>
                

    );
}

export default App;