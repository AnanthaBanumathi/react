import React from 'react'
import FunctionProps1 from './props3';

function FunctionProps2 (props){
    {
        return(
            <div>
                <h1>Your name is {props.name.name} your age is {props.name.age}</h1>
                <FunctionProps1 />
            </div>
        );
    }
    
}

FunctionProps2.defaultProps  = {name : "Guru",age : 22}

export default FunctionProps2 ;