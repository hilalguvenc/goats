import React from 'react'
import { Card } from '../components/card/card';

const box = {
  backgroundColor: "white",
  padding: "20px",
  width: "500px",
  height: "420px",

};

const Home = () => {
  return <>
    <div>
      <Card>
        <h1 className="box-writing">Günlük doğal keçi sütü için giriş yapın</h1>
        <p className="button-name" >İSİM</p>
        <input

          type='text'
          name='username'
          placeholder="İsminizi giriniz."
        />
        <p className="button-name">SOYİSİM</p>
        <input
          id="button-name"
          type='text'
          name='surname'
          placeholder="Soyisminizi giriniz."
        />
        <p className="button-name">MAİL</p>
        <input
          id="button-name"
          type='text'
          name='adress'
          placeholder="Mailinizi giriniz."
        />
        <button className="login">GİRİŞ YAP</button>
      </Card>
    </div></>;
}
export { Home };