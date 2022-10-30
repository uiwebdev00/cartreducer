
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { cartcontext } from './Cartcontext'
import { ACTION } from './Reducer'



export default function Cart() {

    const { cart, setcart, total, dispatch } = useContext(cartcontext)

   
    let [grandTotal, setgrandTotal] = useState([])
    useEffect(() => {
        setgrandTotal(
            total && total.reduce((acc, curr) => acc + Number(curr.product.price) * curr.quantity, 0)
        );
    }, [total]);



    return (

        <div>

            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th style={{ width: '50%' }}>Product</th>
                            <th style={{ width: '10%' }}>Price</th>
                            <th style={{ width: '8%' }}>Quantity</th>
                            <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                            <th style={{ width: '10%' }} />
                        </tr>
                    </thead>
                    <tbody>
                        {total && total.map((cp) => (<tr>
                            <td data-th="Product" key={cp.product.id}>
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src={cp.product.image} alt="..." className="img-responsive" style={{ height: '50px', width: '50px' }} /></div>
                                    <div className="col-sm-10">
                                        <h4 className="nomargin">{cp.product.title}</h4>

                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">${cp.product.price}</td>
                            <td data-th="Quantity">



                                <input type="number" className="form-control text-center" min="1" max={6} defaultValue={1} onChange={(e) => { dispatch({ type: ACTION.CHANGECARTQUANTITY, payload: { product: cp.product, quantity: e.target.value, setcart, cart } }) }}
                                />
                            </td>
                            <td data-th="Subtotal" className="text-center">{cp.product.price * cp.quantity}  </td>
                            <td className="actions" data-th>

                                <button className="btn btn-danger btn-sm" onClick={() => { setcart(cart.filter(item => item.id !== cp.id)) }}><i className="fa fa-trash-o" />Remove</button>
                            </td>
                        </tr>))}
                    </tbody>
                    <tfoot>
                        <tr className="visible-xs">
                            <td className="text-center"><strong></strong></td>
                        </tr>
                        <tr>
                            <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left" /> Continue Shopping</a></td>
                            <td colSpan={2} className="hidden-xs" />
                            {total && <td className="hidden-xs text-center"><strong>Total $ {Math.floor(grandTotal) }</strong></td>}
                            <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right" /></a></td>
                        </tr>
                    </tfoot>
                </table>
            </div></div>

    )
}
