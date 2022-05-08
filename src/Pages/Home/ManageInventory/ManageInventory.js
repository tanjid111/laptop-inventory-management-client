import React from 'react';
import { Table } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import useInventories from '../../../Hooks/useInventories';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventories([]);
    const navigate = useNavigate();
    const navigateToInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
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
        <div>
            <div className='container'>
                <h1 className='text-center text-primary my-4'>Inventory: {inventories.length}</h1>
                <Table responsive="xs" striped bordered hover className='w-75 mx-auto'>
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sold</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            inventories.map(inventory => <tr key={inventory._id}>
                                <td><img style={{ width: "80px" }} src={inventory.img} alt="" /></td>
                                <td>{inventory.name}</td>
                                <td>{inventory.supplier}</td>
                                <td>${inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.sold}</td>
                                <td className='d-flex'><button onClick={() => navigateToInventoryDetail(inventory._id)} type="button" className="btn btn-primary mx-2">Update</button>
                                    <button onClick={() => { handleDelete(inventory._id) }} type="button" className="btn btn-danger">Delete</button></td>
                            </tr>)}


                    </tbody>
                </Table>

            </div>
        </div >
    );
};

export default ManageInventory;