import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
    return (
        <div className='container-fluid' id="banner">
            <div className="contanier" id="headBox">
                <h1>Enjoy your Dinner</h1>
                <p id='para1'>Indulge in a symphony of spices, savor the richness of Indian traditions, and embark on a culinary journey like no other. Join us for a mouthwatering adventure that will tantalize your taste buds. Discover the essence of India, one plate at a time, at Fresh Junction Restaurant.</p>
                <h4>We are ready to serve our best</h4>
                <div className='container' id='frontBtns'>
                    <Link to={'/menu'} className='btns'>Menu</Link>
                    <Link to={'/book'} className='btns'>Book Table</Link>
                </div>
            </div>
        </div>
    )
}
