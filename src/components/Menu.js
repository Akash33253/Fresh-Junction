import React, { useContext, useEffect, useState } from 'react'
import Categories from './Categories';
import MenuList from './MenuList';
import Receipt from './Receipt';
import {useNavigate } from 'react-router-dom';
import ItemContext from './context/ItemContext';
export default function Menu() {
    const context  = useContext(ItemContext);
    const {items,quantity,setQuantity,f,setF,}  = context;
    const allCategories = ['Starter', 'Main Course', 'Dessert'];;
    const [allItem, setallItem] = useState(items);
    const [menuItems, setMenuItems] = useState(items.filter((item) => item.category === 'Starter'));
    const [activeCategory, setActiveCategory] = useState("Starter");
    const [categories, setCategories] = useState(allCategories);
    const updateQuantity = (id, operation) => {
        const newQuantity = quantity;
        if (operation === '+' && quantity[id] < 10) {
            setF(f + 1);
            newQuantity[id] += 1;
        }
        if (operation === '-' && quantity[id] > 0) {
            setF(f - 1);
            newQuantity[id] -= 1;
        }
        setQuantity(newQuantity);
    }
    useEffect(() => {
        setF(f);
        // console.log(f);     
    })
    const filterItems = (category) => {
        setActiveCategory(category);
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
        // console.log(newItems);
    }
    const navigate = useNavigate();

    return (
        <div className='container' id='menu'>
            <h4>Our Menu</h4>
            <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
            <MenuList items={menuItems} quantity={quantity} updateQuantity={updateQuantity} f={f} />
            
            <div className='orderBtnCont'>
                {/* <button id="orderBtn" style={{ display: f == 0 ? 'none' : 'inline' }}>Order Now</button> */}
                <button type="button" id='orderBtn' style={{ display: f === 0 ? 'none' : 'inline' }} className="btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Order Now
                </button>
            </div>
            {/* <!-- Button trigger modal --> */}

            {/* <!-- Modal --> */}
            <div className="modal " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Rate</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <Receipt items={allItem} quantity={quantity} />
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={()=>{navigate('/proceed')}}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
