import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from './config/history'
import { isAuthenticated } from './config/auth'

//Views
import Home from './views/unlogged/home'
import Partners from './views/unlogged/partners'
import Products from './views/unlogged/products/'
import Login from './views/sign/login'
import Signup from './views/sign/signup'
import ShoppingCart from './views/user/shopcart'
import Admin from './views/partner/admin/index'



 const AuthRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
} 

const Routers = () => (
    <Router history={history}>
        <Switch>        
        <AuthRoute exact path="/carrinho" component={ShoppingCart} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/produtos" component={Products} />
        <Route exact path="/parceiros" component={Partners} />
        <Route exact path="/" component={Home} />        
        </Switch>
    </Router>
)

export default Routers;