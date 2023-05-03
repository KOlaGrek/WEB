import React from 'react';

import type {MenuProps} from 'antd';
import { Layout, Menu, theme} from 'antd';
import Cars from "./Cars";
import '../App.css'

const {Header, Content} = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));



const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1}/>
            </Header>
            <Content style={{padding: '0 50px'}}>

                <Layout style={{padding: '24px 0', background: colorBgContainer}}>
                    {/*<Sider style={{ background: colorBgContainer }} width={200}>*/}
                    {/*    <Menu*/}
                    {/*        mode="inline"*/}
                    {/*        defaultSelectedKeys={['1']}*/}
                    {/*        defaultOpenKeys={['sub1']}*/}
                    {/*        style={{ height: '100%' }}*/}
                    {/*        items={items2}*/}
                    {/*    />*/}
                    {/*</Sider>*/}

                    <div className='home-header'>
                        Welcome
                    </div>
                    <Cars/>
                </Layout>
            </Content>
        </Layout>
    );
};

export default App;