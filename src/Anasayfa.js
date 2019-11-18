import React, { Component } from 'react'
import ciftlik from './ciftlik.jpg';
import benefits from './benefits';


const box = {
    backgroundColor: "white",
    padding: "20px",
    width: "500px",
    height: "420px",
    
  }; 


export default class Anasayfa extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    render() {
        return (
            <div>
            <div style={box} className="search-box">
            <form >
            <h1 className="box-writing">Günlük doğal keçi sütü için sipariş verin. {this.state.username} {this.state.address}</h1>
            <p className="button-name">İSİM</p>
            <input
              
              type='text'
              name='username'
              onChange={this.myChangeHandler}
            />
            <p className="button-name">SOYİSİM</p>
            <input
              id="button-name"
              type='text'
              name='surname'
              onChange={this.myChangeHandler}
            />
            <p className="button-name">ADRES</p>
            <input
              id="button-name"
              type='text'
              name='adress'
              onChange={this.myChangeHandler}
            />
           
            </form>
            <button className="login"  onChange={this.myChangeHandler}>SİPARİŞ VER</button>
            </div>
                      
                   
      
      
                     <h2>Keçi Sütü.Com</h2>
                     <div className="row">
                     <div className="column">
                     <div className="card">
                     <button className="card1-button" onClick={benefits}> 
                     <h3>Keçi Sütünün Faydaları</h3>
                     <p>"Keçi sütünün bağışıklığı güçlendirme, metabolizmayı hızlandırma, kalp sağlığını koruma, kemikleri güçlendirme, kilo vermeye yardımcı olma gibi etkileri vardır." </p>
                     </button>
                     </div>
      
                   </div>
                      
                     <div className="column">
                     <div className="card">
                     <button className="card2-button">
                     <h3>Neden Keçi Sütü.Com?</h3>
                     <p>Hijyenik, içerisinde katkı maddesi olmayan sütlerimizle %100 güven teşkil ediyoruz. </p>
                     </button>
                    </div>
                    </div>
                     
                    <div className="column">
                    <div className="card">
                    <button className="card3-button">
                    <h3>Aynı gün, kapınıza ücretsiz teslim!</h3>
                    <p>Keçi Sütü.Com dan verdiğiniz siparişler istediğiniz saatte kapınıza ücretsiz teslim edilmektedir.</p>
                    </button>
                   </div>
                   </div>
        
                   <div className="column">
                   <div className="card">
                   <button className="card4-button">
                   <h3>Biz Kimiz?</h3>
                   <p>Yıllardır edinmiş olduğumuz tecrübe ile hijyenik, doğal keçi sütünü çiftlikten kapınıza getiriyoruz.</p>
                   </button>
                  </div>         
                  </div>
      
                 
            <div>
             <img id="ciftlik" src={ciftlik} width="%500" height="%100" alt=""/>     
            </div>

            
            </div>
            </div>

        )
    }
}
