import React from 'react';
import sleeping from '../../../images/four-04.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'> page is not found</h2>
            <figure class="figure">
                <img src={sleeping} class="figure-img img-fluid rounded w-50 position-absolute top-0 start-50 translate-middle-x" alt="..."/>
                    <figcaption class="figure-caption">A caption for the above image.</figcaption>
            </figure>
            {/* <img src= class="img-fluid" alt="..."></img> */}
        </div>
    );
};

export default NotFound;