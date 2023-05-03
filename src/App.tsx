import {Layout} from 'antd';
import AppHeader from './component/AppHeader';
import React from "react";
import MyFooter from "./component/Footer/MyFooter";



const App = () => {
    return (
        <Layout className="layout">
            <AppHeader/>



            <MyFooter/>
        </Layout>
    );
};

export default App;
