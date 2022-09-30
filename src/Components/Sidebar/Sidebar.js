import React from 'react';
import { Button } from 'react-bootstrap';

const Sidebar = ({time}) => {
    console.log(time)
    let sum = 0;
        for (let i =0; i<time.length; i++){
            sum += time[i];
            console.log(sum)

        };
        const breackTimeHandler =()=>{
            // console.log('clecked')
            // const breakTime= event.target.innerText;
        }
    return (
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
                <Button onClick={breackTimeHandler} className="break">10 min</Button>
                <Button onClick={breackTimeHandler} className="break">20 min</Button>
                <Button onClick={breackTimeHandler} className="break">30 min</Button>
                <Button onClick={breackTimeHandler} className="break">40 min</Button>
               
            </div>
            <h2 className='mt-5'>Activity Details</h2>
            <h4 className='bg-white ms-5 me-5 p-4 rounded'>Activity Time :{sum}  min </h4>
            <h4 className='bg-white ms-5 me-5 p-4 rounded'>Break Time : <span>0</span>  min </h4>
            <Button className="w-100 mt-5" variant="secondary">Activity Completed</Button>

           </div>
    );
};

export default Sidebar;