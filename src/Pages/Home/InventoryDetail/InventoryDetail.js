import { MDBCard, MDBCardBody, MDBCardImage, MDBCardLink, MDBCardText, MDBCardTitle, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useInventoryDetail from '../../../Hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useInventoryDetail(inventoryId);
    const { _id, quantity, sold } = inventory;
    const navigate = useNavigate();


    const removeOne = (id) => {
        let newQuantity = parseInt(quantity) - 1;
        if (newQuantity >= 0) {
            let newSold = parseInt(sold) + 1;
            const newInventory = { ...inventory, quantity: newQuantity, sold: newSold }

            setInventory(newInventory);
            fetch(`http://localhost:5000/laptop/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newInventory)
            })
        }
    }

    const onSubmit = data => {
        // console.log(data)
        const { quantityInput } = data;
        let newQuantity = parseInt(quantity) + parseInt(quantityInput);
        const newInventory = { ...inventory, quantity: newQuantity }
        setInventory(newInventory);
        fetch(`http://localhost:5000/laptop/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newInventory)
        })

    };


    return (
        <div className='container'>
            <h1 className=' my-3 text-center'>InventoryDetail</h1>
            <div className='d-flex align-items-center justify-content-center'>
                <MDBCard className='w-50'>
                    <MDBCardImage position='top' alt='...' src={inventory.img} />
                    <MDBCardBody>
                        <MDBCardTitle className='my-3'>{inventory.name}</MDBCardTitle>
                        <MDBCardText>
                            {inventory.description}
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                        <MDBListGroupItem>Price: ${inventory.price}</MDBListGroupItem>

                        <MDBListGroupItem>Quantity: {inventory.quantity}</MDBListGroupItem>
                        <MDBListGroupItem>Sold: {
                            quantity > 0 ? inventory.sold : <span className='text-danger'>Sold Out!</span>
                        }</MDBListGroupItem>
                        <MDBListGroupItem>Supplier: {inventory.supplier}</MDBListGroupItem>
                    </MDBListGroup>
                    <MDBCardBody>
                        <MDBCardLink onClick={() => removeOne(inventory._id)} className='btn btn-primary' href='#'>Delivered</MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <form className='text-center my-3' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='my-3'>Restock the Item</h3>
                <label>Update Quantity</label>
                <input defaultValue="" {...register("quantityInput")} />
                {/* <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' id="" required /> */}
                <br />
                <input className='btn btn-primary my-2' value="Update" type="submit" />
            </form>
            <div className='text-center'>

                <button onClick={() => navigate('/manage')} className='btn btn-primary'>Manage All Inventory</button>

            </div>
        </div >
    );
};

export default InventoryDetail;