import React, { useEffect } from 'react';
import useInventories from '../../Hooks/useInventories';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { confirmAlert } from 'react-confirm-alert';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardLink, MDBCardText, MDBCardTitle, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/laptop1?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setInventories(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItem();
    });


    const handleDelete = id => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: (_id) => {
                        const url = `http://localhost:5000/laptop/${id}`;
                        fetch(url, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                const remaining = inventories.filter(inventory => inventory._id !== id);
                                setInventories(remaining);
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: (_id) => alert('Not deleting any Inventory')
                }
            ]
        });
    }

    return (
        <div className='container'>
            <h2>Your Added Items:{inventories.length}</h2>
            {

                inventories.map(inventory => <div className='my-5' key={inventory._id}>
                    <MDBCard className='w-50 mx-auto'>
                        <MDBCardImage className='w-50 mx-auto' position='top' alt='...' src={inventory.img} />
                        <MDBCardBody>
                            <MDBCardTitle className='my-3'>{inventory.name}</MDBCardTitle>
                            <MDBCardText>
                                {inventory.description}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBListGroup flush>
                            <MDBListGroupItem>Price: ${inventory.price}</MDBListGroupItem>

                            <MDBListGroupItem>Quantity: {inventory.quantity}</MDBListGroupItem>
                            <MDBListGroupItem>Sold: {inventory.sold}</MDBListGroupItem>

                            <MDBListGroupItem>Supplier: {inventory.supplier}</MDBListGroupItem>
                        </MDBListGroup>
                        <MDBCardBody>
                            <MDBCardLink onClick={() => { handleDelete(inventory._id) }} className='btn btn-primary' href='#'>Delete</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>

                </div>)
            }
        </div >
    );
};

export default MyItems;