import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>How does React works</h1>
            <p>1.React create avitual dom. 2. React works unidirectionally.3. React use use state to change data.4. Reactuse jsx which are simillar to html</p>
            <h1>Difference Between state and props</h1>
            <p>1.State use to store data where props use to send data. 2. State can be acces from anywhere but props can't be access from everywhere 3. State used to if data change  and props used toi send data. 4. The Data is passed within the component only.where The Data is passed from one component to another.5. state is Mutable  can be modified but props is imutable </p>
            <h1>Others uses of  useEffect</h1>
            <p>1.UseEffect is used to updating data in the dom. 2. .UseEffect is used to updating data in the timers 3. UseEffect render Data each of the change. 4. UseEffect use depemdencies to conditionally data load </p>
        </div>
        
    );
};

export default Questions;