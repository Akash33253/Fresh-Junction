import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';

export default function Table() {
    const detailsInitial = {
            name : "",
            email : "",
            date : "",
            time : "",
            persons : ""
        }
    const navigate = useNavigate();
    const [details,setDetails] = useState(detailsInitial)
    const onChange = (e)=>{
        setDetails({...details, [e.target.name] : [e.target.value]})
    }
    useEffect(() => emailjs.init("r0lv7HV9b8EpXg1ME"), []);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const serviceId = "service_w4ihzlw";
        const templateId = "template_hgmeeii"
        try {

            await emailjs.send(serviceId, templateId, {
                recipient: details.email,
                to_name : details.name,
                from_name : "Fresh Junction",
                persons : details.persons,
                res_date : details.date,
                res_time : details.time

            });
            setDetails(detailsInitial);
            alert("email successfully sent check inbox");
            navigate('/');
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
    return (
        <div className='container' id='table'>
            <h4>Book A Table</h4>
                <form action="" className="container tableForm">
                        <input type="text" placeholder="First name" required name='name' onChange={onChange} aria-label="First name" />
                        <input type="text" placeholder="Last name" aria-label="Last name" />
                        <input type="email" placeholder="Email" required name='email' onChange={onChange} aria-label="Email" />
                        <input type="phone" placeholder="Phone" aria-label="Phone" />
                        <input type="number" min={0} max={10} required name='persons' onChange={onChange} defaultValue={"Number of Person"} placeholder="Number of Person" aria-label="Number of person" />
                        <input type="date" onChange={onChange} required name='date' aria-label="Date" />
                        <input type="time" onChange={onChange}  required name='time' aria-label="time" />
                        <input type="submit" id='submitBtn' onClick={handleSubmit} aria-label="time" />
                </form>
        </div>
    )
}
