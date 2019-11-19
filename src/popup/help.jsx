import React from "react";

const box = {
  backgroundColor: "white",
  padding: "20px",
  width: "400px",
  height: "600px",
  
}; 

const HelpPopup = (props) => {
  return <div style={box} className="help-popup">
    <form>
    <button className="close-popup" onClick={() => props.onClose()}>X</button>
    <h1 className="help">Önerilen Yardım</h1>
    <hr/>
    <button className="help-box">
    <h1 className="article">Nasıl sipariş oluşturulur?</h1>
    <h1 className="reply">Daha önce alışveriş yapmadıysanız Keçi Sütü.Com'a gidin ve kaydolun.E-posta adresinizi kullanarak kay...</h1>
    <h1 className="blue-article">Devamını okuyun  ></h1>
    </button>
    <br/>
    <button className="help-box">
    <h1 className="article">Ödeme nasıl yapılır?</h1>
    <h1 className="reply">Keçi Sütü.Com'da yalnızca kapıda ödeme seçeneği mevcuttur.  </h1>
    <h1 className="blue-article">Devamını okuyun  ></h1>
    </button>
    <br/>
    <button className="help-box">
    <h1 className="article">Teslimat nasıl yapılır?</h1>
    <h1 className="reply">Siparişleriniz kendi araçlarımızla istediğiniz saatte kapınıza teslim edilmektedir.</h1>
    <h1 className="blue-article">Devamını okuyun  ></h1>
    </button>
    <br/>
    <button className="help-box">
    <h1 className="article">Ön sipariş verilebilir mi?</h1>
    <h1 className="reply">Siparişinizi verirken mesaj kısmında teslim almak istediğiniz günü, saati ve miktarını belirtebilirsiniz.</h1>
    <h1 className="blue-article">Devamını okuyun  ></h1>
    </button>



    </form>
  </div>
};
export {HelpPopup}