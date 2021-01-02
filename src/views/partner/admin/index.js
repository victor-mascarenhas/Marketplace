import LayoutAdmin from '../../../components/admin/layout'
import ListProducts from '../../../components/admin/product/list'
import FormProducts from '../../../components/admin/product/create'
import FormCategory from '../../../components/admin/category/create'
import ListCategory from '../../../components/admin/category/list'
import { Route } from 'react-router-dom'

const MenuAdmin = [
    {
        sub: "category",
        name: "Listar categorias",
        path: '/category/list',
        icon: "",
        component: () => <ListCategory/>
    },
    {
        sub: "category",
        name: "Criar nova",
        path: '/category/create',
        icon: "",
        component: () => <FormCategory/>
    },
    {
        sub: "product",
        name: "Listar produtos",
        path: '/product/list',
        icon: "",
        component: () => <ListProducts/>
    },
    {
        sub: "product",
        name: "Criar novo",
        path: '/product/create',
        icon: "",
        component: () => <FormProducts/>
    }
]





const Admin = (props) => {


    return (
        <LayoutAdmin menu={MenuAdmin}>
            <h1> brabo </h1>
            {MenuAdmin.map((item, i) => (
                <Route key={i} exact path={props.match.path + item.path} component={item.component} />
            ))}
        </LayoutAdmin>
    )
}

export default Admin


