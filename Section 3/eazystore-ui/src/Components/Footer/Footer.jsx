import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faCopyright} from "@fortawesome/free-solid-svg-icons"
import  './Footer.css'

export default function Footer() {
    
   return <footer className = "footer">  
       built with 
       <FontAwesomeIcon icon={faHeart}  className="footer-icon" ariba-hidden = "true" />
         by
         <a href="www.Google.com"   target="_blank"  rel="noreferrer"> Sriram</a>
          <div>
          <FontAwesomeIcon icon = {faCopyright} className="footer-icon" />  2025 Sriram
          </div>
        </footer> 

} 