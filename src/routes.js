import { Route, Router, Switch, Redirect } from 'react-router-dom'
import history from './config/history'
//import { isAuthenticated } from '../config/auth'

//Views
import Home from './views/unlogged/home'
import Partners from './views/unlogged/partners'
import Products from './views/unlogged/products'
import Login from './views/sign/login'


/* const AuthRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/signin' />
    }
    return <Route {...rest} />
} */

const Routers = () => (
    <Router history={history}>
        <Switch>        
        <Route exact path="/login" component={Login} />
        <Route exact path="/produtos" component={Products} />
        <Route exact path="/parceiros" component={Partners} />
        <Route exact path="/" component={Home} />        
        </Switch>
    </Router>
)

export default Routers;