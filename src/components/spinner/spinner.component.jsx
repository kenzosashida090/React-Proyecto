
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import "./spinner.style.scss"
const Spinner = ()=>{
return(

<div className="SpinnerOverlay ">
<FontAwesomeIcon className="icon-awesome" size="5x" icon={solid("spinner") } spin={true} />
</div>


)
}
export default Spinner