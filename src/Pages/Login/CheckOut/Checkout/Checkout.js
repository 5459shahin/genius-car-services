import userEvent from '@testing-library/user-event';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useServicesDetail from '../../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServicesDetail(serviceId); 
    const [user]  = useAuthState(auth);
   
   /*  const [user, setUser] = useState({
        name: 'Akbar the great',
        email: 'akbar@gmail.com',
        address: 'tajmphol roade',
        phone: '012111111111111'
    }); */

    /* const handleAddressChang = event =>{
        console.log(event.target.value);
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest};
        console.log(newUser);
        setUser(newUser);
    } */

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>please Order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name = "name"  placeholder='name' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name = "email"  placeholder='Email' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" value = {service.name} name="service"  placeholder='service'required/>
                <br />
                <input className='w-100 mb-2' type="text" /* onChange ={handleAddressChang}  */name="address"  placeholder='address'required/>
                <br />
                <input className='w-100 mb-2' type ="number" name ="phone"  placeholder='phone'required/>
                <br />
                <input className='btn btn-primary' type="Submit" value="Place  Order"/>
            </form>
            
        </div>
    );
};

export default Checkout;