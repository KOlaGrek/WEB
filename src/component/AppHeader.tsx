import React from 'react';

import type {MenuProps} from 'antd';
import { Layout, Menu, theme} from 'antd';
import Cars from "./Cars";
import '../App.css'
import {films} from "../data";
import Card from "./Card/Card";

const {Header, Content} = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));



const AppHeader: React.FC = () => {
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


                    <div className='home-header'>
                        Welcome
                    </div>

                    <Cars/>
                    <hr/>
                    <h1  style={{textAlign:"center",marginTop:"20px",fontSize:"25px"}}>Лучшие фильмы всех времен</h1>
                    <div className="cards-home">

                        {films.map(el=><Card key={el.name} {...el}/>)}
                    </div>
                </Layout>
            </Content>
        </Layout>
    );
};

export default AppHeader;