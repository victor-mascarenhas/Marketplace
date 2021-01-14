import {Route} from "react-router-dom";
import OpenPartner from './openPartner'
import AllPartners from './allPartners'





const PartnerRoutes = (props) => {

    return(
             <>    
            <Route exact path={props.match.path} component={AllPartners}/>
            <Route exact path={props.match.path + "/:partnerId"} component={OpenPartner}/>        
            </>  
        
    )
}

export default PartnerRoutes
