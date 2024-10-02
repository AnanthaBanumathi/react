import React from "react";
class Lifecycle2 extends React.Component{
    constructor(){
        super();
        this.state = {value:"welcome to",name:"Frontend"}
    }
    componentWillMount(){
        alert("Learn ReactJS Lifecycle");
    }
    changevalue = () =>{
        this.setState({name:"Learn reactjs event"})
    }
    componentDidMount(){
        {
        setTimeout(() => {
            this.setState({name:"React JS"})},5000)
        }
    }
    render(){
        return(
            <div>
                <h1>ReactJS component's Lifecycle</h1>
                <h2>{this.state.value}{this.state.name}</h2>
                <h2 id="element"></h2>
                <br />
                <button type="button" onClick = {this.changevalue}>Click here!</button>
                <button type="button" onClick={this.deleteheader}>Delete header</button>
            </div>
        );
    }
}
export default Lifecycle2;