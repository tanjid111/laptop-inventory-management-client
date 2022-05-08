import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
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
                .then(res => res.json())
                .then(result => {
                    console.log(result);
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
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };


    return (
        <div className='container'>
            <h1 className=' my-3 text-center text-primary '>InventoryDetail</h1>
            <div className='d-flex align-items-center justify-content-center'>

                <Card className='mx-auto' style={{ width: '40rem' }}>
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
                    <Card.Body className='text-center mx-auto'>
                        <Card.Link onClick={() => removeOne(inventory._id)} className='btn btn-primary' href="#">Delivered</Card.Link>
                    </Card.Body>
                </Card>

            </div>
            <form className='text-center my-3 w-25 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='my-3'>Restock the Item</h3>
                <label>Update Quantity</label>
                <input defaultValue="" {...register("quantityInput")} />
                {/* <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' id="" required /> */}
                <br />
                <input className='btn btn-primary my-2' value="Update" type="submit" />
            </form>
            <div className='text-center w-25 mx-auto '>

                <button onClick={() => navigate('/manage')} className='btn btn-primary'>Manage All Inventory</button>

            </div>
        </div >
    );
};

export default InventoryDetail;