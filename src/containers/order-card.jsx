import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';
import { Card } from '../components/card/card';
import './style/order-card.css';
import "react-datepicker/dist/react-datepicker.css";

const OrderCard = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const onAddressChange = (e) => {
    setAddress(e.target.value);
  }
  const onDateChange = (date) => {
    setDate(date);
  }
  return <>
    <Card>
      <span id="order-card">
        <h1 className="box-writing">Günlük Doğal Keçi Sütü</h1>
        <p>Aşağıdaki bilgileri doldurarak sipariş verebilirsiniz</p>
        <input onChange={onNameChange} type="text" placeholder="İsim" />
        <InputMask
          onChange={onPhoneChange}
          className="phone-input"
          mask="0(599) 999 99 99"
          alwaysShowMask
        />
        <textarea onChange={onAddressChange} type="text" placeholder="Adres" />
        <div className="actions">
          <DatePicker
            selected={date}
            onChange={onDateChange}
            id="order-date-picker"
            placeholderText="Tarih"
          />
          <button id="order-button">Sipariş Ver</button>
        </div>
      </span>
    </Card>
  </>
}

export { OrderCard }