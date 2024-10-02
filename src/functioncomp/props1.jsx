import React from 'react'
//import FunctionProps1 from './props3';
import FunctionProps1 from './props3';
//import FunctionProps2 from './props2';

 function FunctionProps(props){
    {
        let name2 = {name : "Ananthi",age : 19}
        return(
            <div>
                <h1>Your name is {props.name}</h1>
                <FunctionProps1 />
                {/* <FunctionProps2  />  */}
            </div>

        );
        
    }

}
export default FunctionProps