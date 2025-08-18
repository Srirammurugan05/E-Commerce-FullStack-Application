import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faCopyright} from "@fortawesome/free-solid-svg-icons"
import  './Footer.css'

export default function Footer() {
    
   return <footer className = "footer">  
       built with 
       <FontAwesomeIcon icon={faHeart}  className="footer-icon" ariba-hidden = "true" />
         by
         {/* Target = "_blank"  we can use it on the <a> tag 
         if we want to open the link in new tab ... 
         when we use  target we have use rel = "noreferer" for security reasons */
          }
         <a href="www.Google.com"   target="_blank"  rel="noreferrer"> Sriram</a>    
          <div>
          <FontAwesomeIcon icon = {faCopyright} className="footer-icon" />  2025 Sriram
          </div>
        </footer> 

} 