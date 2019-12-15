import React from 'react'
import DatePicker from 'react-datepicker';
import { Card } from '../components/card/card';
import './style/order-card.css';
import "react-datepicker/dist/react-datepicker.css";

const OrderCard = () => {
  return <>
    <Card>
      <span id="order-card">
        <h1 className="box-writing">Günlük Doğal Keçi Sütü</h1>
        <p>Aşağıdaki bilgileri doldurarak sipariş verebilirsiniz</p>
        <input type="text" placeholder="İsim" />
        <input type="number" placeholder="Telefon Numarası" />
        <textarea type="text" placeholder="Adres" />
        <div className="actions">
          <DatePicker id="order-date-picker" placeholderText="Tarih" />
          <button id="order-button">Sipariş Ver</button>
        </div>
      </span>
    </Card>
  </>
}

export { OrderCard }