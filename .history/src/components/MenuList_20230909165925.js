import React from 'react'
export default function MenuList(props) {
    return (
        <div className='container' id='menuList'>
            {
                props.items.map((item) => {
                    const { id, title, price, img, desc } = item;
                    return (
                          <div className="card1" key={id}>
                            <img src={img} alt="" />
                            <div className="itemContent">
                                <h3>{title}</h3>
                                <div>Price : &#8377; {price}</div>
                            </div>
                            <div className="itemButtons">
                                  <button onClick={()=>{props.updateQuantity(id,'-')}}>-</button>
                                  <input type="text"  readOnly={true} value={props.quantity[id]} />
                                  <button onClick={()=>{props.updateQuantity(id,'+')}}>+</button> 
                            </div>
                          </div>
                    )
                })
            }
            </div>
    )
}
