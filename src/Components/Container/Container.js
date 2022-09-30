import React, { useEffect, useState } from 'react';
import "./Container.css";
import { BeakerIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import Active from '../Active/Active';
import Time from '../Time/Time'
import { Button } from 'react-bootstrap';

const Container = () => {
    const [activity, setActivity] = useState([]);
    const [time, setTime] = useState([])
    
    useEffect(()=>{
        fetch('activity.json')
        .then(res =>res.json())
        .then(data => setActivity(data))
    },[]);

    const handleAddToList = (active) =>{
        const minutes = active.time;
        // console.log(active.time)
        const newTime =[...time, minutes];
        setTime(newTime);
        console.log(newTime);
        let sum = 0 ;
        for (let i = 0; i < newTime.length; i++) { sum += array[i]; 
            console.log(sum)
      }
    return (
        <div className='d-flex'>
           <div   className='bg-info col-lg-8 '>
            
                <div className='d-flex align-items-center p-5'>
                    <BellAlertIcon style={{width:  '40px', height: '40px'}} className='h-6 w-6'></BellAlertIcon>
                    <h1>Alpha Activity Secret</h1>
                </div>

              
               <div className='active-container'>
               {
                    activity.map(active =><Active 
                        key={active.id}
                        active ={active}
                        handleAddToList ={handleAddToList}
                        ></Active>)
                }
               {/* {
                    activity.map(time =><Time 
                        key={time.id}
                        active ={time}
                        ></Time>)
                } */}
               
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
            <h2 className='mt-5'>Add A Break</h2>
            <div className=' info-container  d-flex align-items-center justify-content-center p-6 '>
               
                <h5>10 min</h5>
                <h5> 20 min</h5>
                <h5>30 min</h5>
                <h5>40 min</h5>

            </div>
            <h2 className='mt-5'>Activity Details</h2>
            <h4 className='bg-white ms-5 me-5 p-4 rounded'>Activity Time : {time.length} min </h4>
            <h4 className='bg-white ms-5 me-5 p-4 rounded'>Break Time : 0 min </h4>
            <Button className="w-100 mt-5" variant="secondary">Activity Completed</Button>

           </div>
           <div>
          
           </div>
        </div>
    );
};

export default Container;