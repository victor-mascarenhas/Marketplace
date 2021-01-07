import {Route} from "react-router-dom";
import OpenProduct from './openProduct'
import AllProducts from './allProducts'





const ProductRoutes = (props) => {

    return(
             <>    
            <Route exact path={props.match.path} component={AllProducts}/>
            <Route exact path={props.match.path + "/:productId"} component={OpenProduct}/>        
            </>  
        
    )
}

export default ProductRoutes
