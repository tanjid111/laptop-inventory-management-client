import React from "react";
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center bg-primary mx-auto py-5 text-light fw-bold header">Add Inventory</h2>
            <form className="d-flex flex-column App" onSubmit={handleSubmit(onSubmit)}>
                <label className='fw-bold text-primary fs-4'>Name</label>
                <input placeholder="Name" className="mb-2" {...register("name", { required: true })} />
                <label className='fw-bold text-primary fs-4'>Description</label>
                <input placeholder="Description" className="mb-2" {...register("description")} />
                <label className='fw-bold text-primary fs-4'>Price</label>
                <input placeholder="Price" className="mb-2" type="number" {...register("price")} />
                <label className='fw-bold text-primary fs-4'>Quantity</label>
                <input placeholder="Quantity" className="mb-2" type="number" {...register("quantity")} />
                <label className='fw-bold text-primary fs-4'>Image Link</label>
                <input placeholder="Image Link" className="mb-2" {...register("img")} />
                <label className='fw-bold text-primary fs-4'>Supplier</label>
                <input placeholder="Supplier" className="mb-2" {...register("supplier")} />
                <input className="btn btn-primary mx-auto py-3" type="submit" />
            </form>
        </div>
    );
};

export default AddInventory;