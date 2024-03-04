import React  from "react";
import  ReactDOM  from "react-dom/client";
import "./css/style.css";


class Nini extends React.Component{
   constructor (){
    super ()

    this.state = {
      name : ""
    }
   }

   setValue (){
    this.setState ({name : "Cotne"} , function () {
      window.alert (this.state.name)
    })
    
   }

   render(){
    return(
      <React.Fragment>
        <button type="button" onClick={() => this.setValue ()}>ღილაკი</button>
      </React.Fragment>
    )
   }
}



const root=document.getElementById("root")
ReactDOM.createRoot(root).render(<Nini></Nini>)

