import { Menu } from 'antd';
import { useState } from 'react'
import { ShoppingCartOutlined , SettingOutlined, TagsOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;


const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = ({menu}) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const subMenucat = menu.filter(item => item.sub === 'category')
  const subMenuprod = menu.filter(item => item.sub === 'product')

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={< TagsOutlined />} title="Categorias">
        
      {subMenucat.map((item,i) => (
                    <Menu.Item key={i}>                    
                        <Link to={'/admin' + item.path}>                            
                                {item.icon ? item.icon : ""}
                                <span>{item.name}</span>
                        </Link>                    
                    </Menu.Item>
                ))}
      </SubMenu>
      <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Produtos">
        
      {subMenuprod.map((item,i) => (
                    <Menu.Item key={i}>                    
                        <Link to={'/admin' + item.path}>                            
                                {item.icon ? item.icon : ""}
                                <span>{item.name}</span>
                        </Link>                    
                    </Menu.Item>
                ))}
       
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Configurações">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sider;