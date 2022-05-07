import { MDBCard, MDBCardBody, MDBCardImage, MDBCardLink, MDBCardText, MDBCardTitle, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../../Hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);

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
                        <MDBListGroupItem>Sold: </MDBListGroupItem>
                        <MDBListGroupItem>Supplier: {inventory.supplier}</MDBListGroupItem>
                    </MDBListGroup>
                    <MDBCardBody>
                        <MDBCardLink className='btn btn-primary' href='#'>Delivered</MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <form className='text-center my-3' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='my-3'>Restock the Item</h3>
                <label>Update Quantity</label>
                <input defaultValue="" {...register("example")} />
                {/* <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' id="" required /> */}
                <br />
                <input className='btn btn-primary my-2' type="submit" />
            </form>
        </div>
    );
};

export default InventoryDetail;