import React from 'react'
import special1 from '../images/special1.jpg'
import special2 from '../images/special2.jpg'
import special3 from '../images/special3.jpg'
// import crousel3 from '../images/crousel3.jpg'
export default function Special() {
    return (
        <div className='container' id='special'>
            <h4>Our Speciality</h4>
            <div className="container" id='SpecialContainer' >
                <div className="card bg-transparent">
                    <img src={special1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Masala Dosa</h5>
                        <p className="card-text">Discover our crispy Masala Dosa, a South Indian classic with a flavorful potato filling.</p>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <img src={special2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Shahi Paneer</h5>
                        <p className="card-text">Indulge in the regal flavors of our Shahi Paneer, a creamy and aromatic North Indian delight fit for royalty.</p>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <img src={special3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Veg Noodles</h5>
                        <p className="card-text">"Delight in our savory Veg Noodles, a medley of fresh vegetables and flavorful seasonings."</p>

                    </div>
                </div>            </div>
        </div>
    )
}
