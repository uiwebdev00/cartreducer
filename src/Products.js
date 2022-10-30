
import React, {useState, useContext } from 'react'
import { cartcontext } from './Cartcontext'
import { ACTION, Reducer } from './Reducer'
export default function Products({ data}) {

    

    const {cart,setcart,total,dispatch}=useContext(cartcontext)
    console.log("total=>",total);
    return (
        <div className='container'>
            <div className='row'>
                {data.map((product) => (
                    <div className='col-12 col-md-3' key={product.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={product.image} className="card-img-top" alt="..." style={{ height: '20vw' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text"></p>
                                {total &&total.find((item) => item.product.id === product.id) ?<a href="#" className="btn btn-primary" onClick={() => {dispatch({type:ACTION.REMOVEFROMCART,payload:{product:product,quantity:1,setcart,cart}}) }}>Remove From Cart</a> : <a href="#" onClick={() => {dispatch({type:ACTION.ADDTOCART,payload:{product:product,quantity:1,setcart,cart}}) }} className="btn btn-primary">Add to Cart</a>}
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}
