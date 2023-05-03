import React, { useEffect, useState} from 'react';

import type {MenuProps} from 'antd';
import { Layout, Menu, theme} from 'antd';
import Cars from "./Cars";
import '../App.css'

import Card from "./Card/Card";
import {NavLink} from "react-router-dom";



const {Content} = Layout;





const AppHeader: React.FC = () => {
    const [data,setData] = useState([])
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('film')))
    },[])

    return (
        <Layout>


            <Content style={{padding: '0 50px'}}>

                <Layout style={{padding: '24px 0', background: colorBgContainer}}>


                    <div className='home-header'>
                        Welcome
                    </div>

                    <Cars/>
                    <hr/>
                    <h1  style={{textAlign:"center",marginTop:"20px",fontSize:"25px"}}>Лучшие фильмы всех времен</h1>
                    <div className="cards-home">

                        {data.map(el=><Card key={el.name} {...el}/>)}
                    </div>
                </Layout>
            </Content>
        </Layout>
    );
};

export default AppHeader;