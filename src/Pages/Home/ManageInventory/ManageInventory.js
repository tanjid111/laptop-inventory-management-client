import React from 'react';
import { Table } from 'react-bootstrap';
import useInventories from '../../../Hooks/useInventories';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventories([]);
    return (
        <div>
            <div className='container'>
                <h1 className='text-center text-primary my-4'>Inventory: {inventories.length}</h1>
                <Table striped bordered hover className='w-75 mx-auto'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            inventories.map(inventory => <tr>
                                <td>{inventory.id}</td>
                                <td>{inventory.name}</td>
                                <td>{inventory.supplier}</td>
                                <td>${inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td><button type="button" className="btn btn-primary">Delete</button></td>
                            </tr>)}


                    </tbody>
                </Table>

            </div>
        </div >
    );
};

export default ManageInventory;