import React, { useEffect } from 'react';
import useInventories from '../../Hooks/useInventories';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { confirmAlert } from 'react-confirm-alert';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `https://gentle-shelf-57774.herokuapp.com/laptop1?email=${email}`;
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
                        const url = `https://gentle-shelf-57774.herokuapp.com/laptop/${id}`;
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
            <h2 className='text-center'>Your Added Items:{inventories.length}</h2>
            {

                inventories.map(inventory => <div className='my-5' key={inventory._id}>

                    <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={inventory.img} />
                        <Card.Body>
                            <Card.Title>{inventory.name}</Card.Title>
                            <Card.Text>
                                {inventory.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price: ${inventory.price}</ListGroupItem>
                            <ListGroupItem>Quantity: {inventory.quantity}</ListGroupItem>
                            <ListGroupItem>Sold: {inventory.sold}</ListGroupItem>
                            <ListGroupItem>Supplier: {inventory.supplier}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link onClick={() => { handleDelete(inventory._id) }} className='btn btn-primary' href="#">Delete</Card.Link>

                        </Card.Body>
                    </Card>


                </div>)
            }
        </div >
    );
};

export default MyItems;