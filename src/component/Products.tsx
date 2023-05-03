import React, {useEffect, useState} from 'react';
import '../App.css'
import {Card} from "antd";


const { Meta } = Card;
const Products = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = async ()=>{
        try{
            setLoading(true)
            await  fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setProducts(json))
            console.log(products)
            setLoading(false)
        }catch (e){
            setLoading(false)
            console.log(e.message)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            getData()
        },1500)
    },[])
    if(loading){
        return (
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    return (
        <div className="products">
            {products.map(el=> <Card
                key={el.id}
                hoverable
                style={{ width: 240 , padding:20}}
                cover={<img height="250px" alt="example" src={el.image} />}
            >
                <Meta title={el.title} description={``} />
                <span>{el.description.slice(0,60)}</span>
            </Card>)

            }

        </div>
    );
};

export default Products;