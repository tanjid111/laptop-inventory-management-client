import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { id, name, price, description, quantity, img, supplier } = inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col d-flex align-items-stretch'>
            <div className="card ">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={img} className="img-fluid card-img-top" alt='' />
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                </div>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="card-title">${price}</h5>
                    <h5 className="card-title">Quantity Available: {quantity}</h5>
                    <h5 className="card-title">Supplier: {supplier}</h5>
                    <p className="card-text">{description.length < 100 ? description : description.slice(0, 200)}
                        <span style={{ cursor: 'pointer' }} className='read-more text-primary' onClick={() => Navigate(`/realestate/${id}`)}>
                            ...Read More
                        </span></p>
                    <button onClick={() => navigateToInventoryDetail(id)} className="btn btn-primary mt-auto">Manage</button>
                </div>
            </div>
        </div >

    );
};

export default Inventory;