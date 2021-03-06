import React from 'react';
/* import { Placeholder } from 'react-bootstrap'; */
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{ 
        console.log(data);
        const url = `http://localhost:5000/service`;
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
        })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2> please Add a Service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' Placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' Placeholder='Description' {...register("description")} />
                <input className='mb-2' Placeholder="Price" type="number" {...register("price")} />
                <input className='mb-2' Placeholder= "Photo URL" type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;