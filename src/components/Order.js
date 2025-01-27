import React, { useContext, useState } from 'react'
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemContext from './context/ItemContext';
export default function Order() {
    const context = useContext(ItemContext);
    let bill =0;
    let numberOfITems=0;
    const Quantity = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const {items,quantity,setQuantity} = context;
    items.forEach(item => {
        const { id,price } = item;
        if (quantity[id] >= 1){
            bill+=price*quantity[id];  
            numberOfITems+=quantity[id];   
        }
    });
    const navigate = useNavigate();
    const [details,setDetails] = useState({
        name : "",
        email : '',
        address : ''
    })
    const onChange = (e)=>{
        setDetails({...details, [e.target.name]: [e.target.value]})
    }
    useEffect(() => emailjs.init("r0lv7HV9b8EpXg1ME"), []);
    const handleProceed = async(e)=>{
        e.preventDefault();
        // console.log("Clicked")
        const serviceId = "service_w4ihzlw";
        const templateId = "template_jvzxiqg"
        try {
            await emailjs.send(serviceId, templateId, {
                recipient: details.email,
                to_name : details.name,
                from_name : "Fresh Junction",
                message : "You order is on the way",
                address  : details.address,
                total_bill : bill,
                total_items : numberOfITems

            });
            setQuantity(Quantity);
            alert("email successfully sent check inbox");
            navigate('/');
        } catch (error) {
            alert('Sorry some error occured');
        }
    }
  return (
    <div className='container' id='orderDiv'>
            <h4>Enter Details</h4>
                <form action="" className="container orderForm">
                        <input type="text" placeholder="First name" name="name" onChange={onChange} required aria-label="First name"/>
                        <input type="text" placeholder="Last name" aria-label="Last name"/>
                        <input type="email" placeholder="Email" required={true} name='email' onChange={onChange}  aria-label="Email"/>
                        <input type="phone" placeholder="Phone" aria-label="Phone" />
                        <textarea name="address" id="address" onChange={onChange} required cols="30" rows="5"  placeholder='Address'></textarea>
                        <input type="submit" id='submitBtn2' aria-label="time" value={'Procced'} onClick={handleProceed}/>
                </form>
        </div>
  )
}
