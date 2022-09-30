import React, { useEffect, useState } from 'react';
import "./Container.css";
import { BeakerIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import Active from '../Active/Active';
import Time from '../Time/Time'
import { Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Container = () => {
    const [activity, setActivity] = useState([]);
    
    
    useEffect(()=>{
        fetch('activity.json')
        .then(res =>res.json())
        .then(data => setActivity(data))
    },[]);
    const [time, setTime] = useState([])
    const handleAddToList = (active) =>{
        const minutes = active.time;
        // console.log(active.time)
        const newTime =[...time, minutes];
        setTime(newTime);
        console.log(newTime);
        let sum = 0;
        for (let i =0; i<newTime.length; i++){
            sum += newTime[i];
            console.log(sum)

        }
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
           <Sidebar time={time}></Sidebar>
           <div>
          
           </div>
        </div>
    );
};

export default Container;