import {
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Drawer, Layout, Menu, MenuProps, theme } from 'antd';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDisclose } from '~/hooks';
import "./layout.scss";

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Overview', 'g312312rp', null, [
        getItem('Navigation One', 'sub1', <MailOutlined />,
            [
                getItem(<Link to="/">Dashboard</Link>, '1'),
                getItem(<Link to="/task">Task</Link>, '2213'),
                getItem(<Link to="/todo">Todo</Link>, '212'),
                getItem(<Link to="/mail">Mail</Link>, '2222')
            ]),
        getItem('Management', 'sub2341', <MailOutlined />, [
            getItem(<Link to="/mana/users">Users</Link>, '422341'),
            getItem('Option 2', '4234232')
        ]),
        getItem('App', 'ds', <MailOutlined />, [
            getItem(<Link to="/app/images">Images</Link>, 'dqw'),
        ]),
    ], 'group'),

];

const LayoutMain: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { isOpen, onClose, onOpen } = useDisclose();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Layout className='vh-100'>
            <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
                <div className="ns-logo">
                    N6
                </div>
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme='dark'
                    items={items}
                />
            </Sider>
            <Layout >
                <Header style={{ padding: 0, background: colorBgContainer }} className='center-y space-between pe-20'>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Avatar size={40} icon={<UserOutlined />} onClick={onOpen} />
                    <Drawer title="Hung Tran" placement="right" onClose={onClose} open={isOpen}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </Header>
                <Content
                    style={{
                        padding: 20,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutMain;