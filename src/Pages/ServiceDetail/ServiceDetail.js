import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServicesDetail from '../../hooks/useServiceDetail';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetail = () => {
    const  {serviceId} = useParams();
   const [service] = useServicesDetail(serviceId)


    return (
        <div>
            <PageTitle title='Detail'></PageTitle>
            <h2>You are about to book: {service.name}</h2>
            <div className="text-center">
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;