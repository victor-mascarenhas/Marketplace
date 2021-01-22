import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from './config/history'
import { isAuthenticated } from './config/auth'
import { useSelector } from 'react-redux'

//Views
import Home from './views/unlogged/home'
import Partners from './views/unlogged/partners/'
import Products from './views/unlogged/products/'
import Login from './views/sign/login'
import Signup from './views/sign/signup'
import ShoppingCart from './views/user/shoppingcart/'
import Admin from './views/partner/admin/index'
import Error404 from './views/error/404'
import Error403 from './views/error/403'



 const AuthRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
} 
const CustomRoute = ({ ...rest }) => {
const isPartner = useSelector((state) => state.auth.user.partner)
    if (!isPartner) {
        return <Redirect to='/403' />
    }
    return <Route {...rest} />
} 

const Routers = () => (
    <Router history={history}>
        <Switch>        
        <AuthRoute path="/carrinho" component={ShoppingCart} />
        <CustomRoute path="/admin" component={Admin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/produtos" component={Products} />
        <Route path="/parceiros" component={Partners} />
        <Route exact path="/" component={Home} />
        <Route exact path="/403" component={Error403}/>
        <Route path="*" component={Error404}/>        
        </Switch>
    </Router>
)

export default Routers;