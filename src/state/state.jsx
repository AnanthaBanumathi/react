// import React from "react";
// class Reactstate extends React.Component{
//       constructor(){
//         super();
//         this.state={initialvalue:"welcome",name:"guys"}
//       }
//       changevalue = () =>
//       {
//         this.setState({initialvalue:"Thanks for coming"});
//       }
//       render(){
//         return <div>
//             <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
//             <br />
//             <button type="button" onClick={this.changevalue}>Exit</button>
//         </div>
//       }
// }
// export default Reactstate

import React from "react";
class Reactstate extends React.Component{
      constructor(){
        super();
        this.state={initialvalue:0}
      }
      changevalue = () =>
      {
        this.setState({initialvalue:this.state.initialvalue+1});
      }
      changevalue1 = () =>
      {
       this.setState({initialvalue:this.state.initialvalue-1}); 
      }
      changevalue2 = () =>
        {
         this.setState({initialvalue:0}); 
        }
      render(){
        return <div class="div">
            <h1>{this.state.initialvalue}</h1>
            <br />
            <button type="button" onClick={this.changevalue}>Increment</button> 
            <button type="button" onClick={this.changevalue1}>Decrement</button>
            <button type="button" onClick={this.changevalue2}>Start</button>
        </div>
      }
}
export default Reactstate