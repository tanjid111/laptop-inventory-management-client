import { MDBCard, MDBCardBody, MDBCardImage, MDBCardLink, MDBCardText, MDBCardTitle, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../../Hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { inventoryId } = useParams();
    // const [inventories] = useInventoryDetail(inventoryId);

    return (
        <div className='container border'>
            <h2 className=' my-2 text-center'>InventoryDetail:{inventoryId}</h2>
            <div className='d-flex align-items-center justify-content-center'>
                <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
                    <MDBCardBody>
                        <MDBCardTitle>name</MDBCardTitle>
                        <MDBCardText>
                            description.
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                        <MDBListGroupItem>Price: $</MDBListGroupItem>
                        <MDBListGroupItem>Quantity available: either 0 or sold</MDBListGroupItem>
                        <MDBListGroupItem>Supplier: </MDBListGroupItem>
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