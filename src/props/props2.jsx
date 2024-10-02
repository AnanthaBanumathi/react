import React from 'react'

class ClassProps2 extends React.Component{
    render()
    {
        return(
            <div>
                <h1>You name is {this.props.name.name}
                    Your age is {this.props.name.age}
                </h1>
            </div>
        )
    }
}
export default ClassProps2