import React, { useEffect, useState } from 'react';

const Cart = (props) => {
    const [total, setTotal] = useState(0)
    const cart = props.cart;
  useEffect(()=>{
    cart.forEach(element => {
        var amount = Number(element.salary) + Number(total)
        setTotal(amount)
    })
  },[props])

    return (
        <div>
            <h2>total salary: {total} BDT</h2>
        </div>
    );
};

export default Cart;