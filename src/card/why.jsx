import React from 'react'

 const whyBox = {
    margin: 0,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    left : 0,
    top : 0,
    
  }; 
  
 const Why= (props) => {
         return (
             <div  style={whyBox}  className="benefits-milk">
             <form>
             <button className="close-popup" onClick={() => props.onClose()}>X</button> 
             <h1>Keçi Sütü Faydaları</h1>
             </form>
             </div>
       )
   }

export default Why;