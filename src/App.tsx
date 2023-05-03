import {Layout, Menu, MenuProps} from 'antd';
import AppHeader from './component/AppHeader';
import React, {useContext, useEffect} from "react";
import MyFooter from "./component/Footer/MyFooter";
import {useStore} from "./Store/UseStore";
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";
import Products from "./component/Products";
import About from "./component/About";



const App = () => {
    const context = useStore()
    useEffect(() => {
        try {

            context?.setItems()
        } catch (e) {

        }
        console.log(context)
    }, [])
    return (
        <BrowserRouter>
            <Layout className="layout">
                <div className="header">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>

                <Routes>
                    <Route path='/' element={<AppHeader/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <MyFooter/>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
