import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags,faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

class ClassHeader extends Component {

     render(){

         return (
           
            <header className="header" >
        
            <div className="container">
            <a  className="link" href="/"> 
            <FontAwesomeIcon icon={faTags}  className="fa-icon"/>
           <span className="brand-title"> Stickers</span>
            </a> 
            <nav className="nav">
                <ul>
                    <li>
                       <a className="nav-link" href="/" >Home</a> 
                    </li>
                     <li>
                       <a className="nav-link" href="/about" >About</a> 
                    </li>
                     <li>
                       <a className="nav-link" href="/contact" >Contact</a> 
                    </li>
                     <li>
                       <a className="nav-link" href="/login" >Login</a> 
                    </li>
                     <li>
                       <a className="nav-link" href="/cart" >
                       <FontAwesomeIcon icon={faShoppingBasket}  />
                       </a> 
                    </li>
                </ul>
        
            </nav>
        
            </div>
        
            </header>
        
         ) ;  
        

     };
     
}

export default ClassHeader;