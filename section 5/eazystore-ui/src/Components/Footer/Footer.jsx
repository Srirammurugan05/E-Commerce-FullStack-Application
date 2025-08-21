import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faCopyright} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    
   return <footer className = "flex justify-center items-center py-4 font-primary text-gray-700">  
       built with 
       <FontAwesomeIcon icon={faHeart}  className=" text-red-700 mx-1 animate-pulse" ariba-hidden = "true" />
         by 
         {/* Target = "_blank"  we can use it on the <a> tag 
         if we want to open the link in new tab ... 
         when we use  target we have use rel = "noreferer" for security reasons */
          }
         <a href="www.Google.com"   target="_blank" 
          rel="noreferrer" className=" text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark" >  Sriram</a>    
          <div>
          <FontAwesomeIcon icon = {faCopyright} className=" text-red-700  mx-1 animate-pulse" />  2025 Sriram
          </div>
        </footer> 

} 