import React from 'react';

import './products.css';


const Product = ({item,productInfo,setProductInfo,openInfo,addToCart}) => {
// console.log(productInfo,'state')

    const {id,name,description,picture,price} = item;
    return (
        <div key ={id} className = "product" onClick = {()=>openInfo(item)}>
            <img className = "" src = {picture} alt="oops" width="80%" ></img>
            <h1 className = "productName" >{name}</h1>
            {console.log('localhost:8000/static/images/'+picture,'picture')}
            
            <p className = "productPrice" >${parseFloat(price).toFixed(2)}</p>
        </div>
    )
}

export default Product;