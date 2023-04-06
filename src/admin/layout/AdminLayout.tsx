import React, { useState } from 'react';
import {
    UnorderedListOutlined,
    UserOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

export const AdminLayout = () => {
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
            getItem(<Link to={"categories/add"}>Add Category</Link>,4,)
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
                    <Header style={{ padding: '0, 20px', background: colorBgContainer, textAlign: 'center' }}>
                        <Space direction="vertical">
                            <Search
                                placeholder="input search text"
                                enterButton="Search"
                                size="large"
                                suffix={suffix}
                                onSearch={onSearch}
                            />
                        </Space>
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
