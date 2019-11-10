import React ,{Component} from 'react'
import "./App.css";
import { Parallax, Background } from 'react-parallax';
import ciftlik from './ciftlik.jpg';

class App extends Component {
    render() {
        return (
            
            <div className="container center">
                <nav className = "menu">
                    <h1 className ="menu_logo">Keçi Sütü.Com</h1>
                    
                <div className = "menu_right">
                    <ul className = "menu_list">
                        <li className = "menu_list_item" ><a className = "menu_link menu_link active" href = "a"></a>Anasayfa</li>
                        <li className = "menu_list_item" ><a className = " " href = "a"></a>Hikayemiz</li>
                        <li className = "menu_list_item" ><a className = "menu_link" href = "a"></a>Ürünlerimiz</li>
                        <li className = "menu_list_item" ><a className = "menu_link" href = "a"></a>Sipariş</li>
                    </ul>
                </div>
                </nav>
                <img  id="ciftlik" src={ciftlik} width="%500" height="%100" />
                <div className="ana_yazi">
                    <p>"Günlük taze, doğal süt hemen kapınızda."</p>
                </div>
                
                 </div>

                
                 
               

            
        
              
            

    

        )
    }
}
export default App;
