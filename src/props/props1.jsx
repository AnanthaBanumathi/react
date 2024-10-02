import React from 'react'
import ClassProps2 from './props2';

class ClassProps extends React.Component{
    render()
    {
        let name2 = {name : "Ananthi",age : 19}
        return(
            <div>
                <h1>Your name is {this.props.name}</h1>
                <ClassProps2  /> 
            </div>

        );
        
    }

}
export default ClassProps