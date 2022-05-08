import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/laptop`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast('Your item is added!')
                }
            })
        reset();

    };

    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center bg-primary mx-auto py-5 text-light fw-bold header">Add Inventory</h2>
            <form className="d-flex flex-column App" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your Email" value={user.email} className="mb-2" {...register("email")} />
                <label className='fw-bold text-primary fs-4'>Product Name</label>
                <input placeholder="Product Name" className="mb-2" {...register("name", { required: true })} />
                <label className='fw-bold text-primary fs-4'>Product Description</label>
                <input placeholder="Product Description" className="mb-2" {...register("description")} />
                <label className='fw-bold text-primary fs-4'>Price</label>
                <input placeholder="Price" className="mb-2" type="number" {...register("price")} />
                <label className='fw-bold text-primary fs-4'>Quantity</label>
                <input placeholder="Quantity" min={0} className="mb-2" type="number" {...register("quantity", { required: true })} />
                <label className='fw-bold text-primary fs-4'>Sold</label>
                <input placeholder="Sold" min={0} value={0} className="mb-2" type="number" {...register("sold", { required: true })} />
                <label className='fw-bold text-primary fs-4'>Image Link</label>
                <input placeholder="Image Link" className="mb-2" {...register("img")} />
                <label className='fw-bold text-primary fs-4'>Supplier</label>
                <input placeholder="Supplier" className="mb-2" {...register("supplier")} />
                <input className="btn btn-primary mx-auto py-3" value="Add Item" type="submit" />
            </form>
        </div>
    );
};

export default AddInventory;