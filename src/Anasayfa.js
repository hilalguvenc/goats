import React, { Component } from 'react'
import ciftlik from './ciftlik.jpg';



const box = {
    backgroundColor: "white",
    padding: "20px",
    width: "500px",
    height: "420px",
    
  }; 

class Anasayfa extends Component {
  
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
            <h1 className="box-writing">Günlük doğal keçi sütü için giriş yapın. {this.state.username} {this.state.address}</h1>
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
            <p className="button-name">MAİL</p>
            <input
              id="button-name"
              type='text'
              name='adress'
              onChange={this.myChangeHandler}
            />
            </form>
            <button className="login"  onChange={this.myChangeHandler}>GİRİŞ YAP</button>
            </div>
            <div>
             <img id="ciftlik" src={ciftlik} width="%500" height="%100" alt=""/>     
            </div>

            
            </div>
            

        )
    }
}
export default Anasayfa;