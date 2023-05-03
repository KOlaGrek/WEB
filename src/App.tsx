import {Layout} from 'antd';
import AppHeader from './component/AppHeader';
import React, {useContext, useEffect} from "react";
import MyFooter from "./component/Footer/MyFooter";
import {useStore} from "./Store/UseStore";



const App = () => {
    const context = useStore()
    useEffect(()=>{
        try {

            context?.setItems()
        }catch (e){

        }
        console.log(context)
    },[])
    return (
        <Layout className="layout">
            <AppHeader/>



            <MyFooter/>
        </Layout>
    );
};

export default App;
