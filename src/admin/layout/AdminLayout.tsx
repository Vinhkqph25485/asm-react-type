import React, { useEffect, useState } from 'react';
import {
    UnorderedListOutlined,
    UserOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { Input, Space, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface User {
    name: string;
}
export const AdminLayout = () => {
    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
        navigate("/")
    };
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = (value: string) => console.log(value);


    //
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem(<Link to={"products"}>Products</Link>, 'sub1', <ShoppingOutlined />, [
            getItem(<Link to={"products/add"}>Add Producst</Link>, '1'),
        ]),
        getItem('User', 'sub2', <UserOutlined />, [
            getItem('UserAdmin', '2'),
            getItem('Nember', '3'),
        ]),
        getItem(<Link to={"categories"}>Category</Link>, 'sub3', <UnorderedListOutlined />, [
            getItem(<Link to={"categories/add"} >Add Category</Link>,4,)
        ]),
    ];


    ///
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: '0, 25px', background: colorBgContainer, textAlign: 'end', display: 'flex' }}>
                    <Content className='text-xl my-2'>Xin chào: {loggedIn?.name}</Content>
                        <Button style={{margin: '8px '}}  onClick={handleLogout} className='bg-red-500' type="primary">Logout</Button>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Outlet />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div >
    )
}

export default AdminLayout
