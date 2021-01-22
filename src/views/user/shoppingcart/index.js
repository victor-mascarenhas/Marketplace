import {Route} from "react-router-dom";
import ShoppingCart from './shopcart'
import Result from '../../../components/shopcart/result'





const ProductRoutes = (props) => {

    return(
             <>    
            <Route exact path={props.match.path} component={ShoppingCart}/>
            <Route exact path={props.match.path + "/result"} component={Result}/>        
            </>  
        
    )
}

export default ProductRoutes
