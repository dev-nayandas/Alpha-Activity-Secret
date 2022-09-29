import React, { useEffect, useState } from 'react';
import "./Container.css";
import { BeakerIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import Active from '../Active/Active';

const Container = () => {
    const [activity, setActivity] = useState([]);
    useEffect(()=>{
        fetch('activity.json')
        .then(res =>res.json())
        .then(data => setActivity(data))
    },[])
    return (
        <div className='d-flex'>
           <div   className='bg-info col-lg-8 '>
            
                <div className='d-flex align-items-center p-5'>
                    <BellAlertIcon style={{width:  '40px', height: '40px'}} className='h-6 w-6'></BellAlertIcon>
                    <h1>Alpha Activity Screte</h1>
                </div>

              
               <div className='active-container'>
               {
                    activity.map(active =><Active 
                        key={active.id}
                        active ={active}
                        ></Active>)
                }
               
               </div>
           
           </div>
           <div className='bg-primary col-lg-4'>
            <h2>Nayan Das</h2>
            <h3>Cumilla, Bangladesh</h3>
            <div className=' info-container  d-flex align-items-center justify-content-center p-6'>
                <h5>75 Kg  <br></br> Weight</h5>
                <h5>6.5 Inch <br></br> Height</h5>
                <h5>30 Yeasrs <br></br> Age</h5>

            </div>
            <div className="break-container">

            </div>
           </div>
        </div>
    );
};

export default Container;