import {useState,useEffect} from "react";

function StateExample3() {
    const[state1,setstate1] = useState('HTML')
    const[state2,setstate2] = useState('CSS')
    const[state3,setstate3] = useState('BOOSTRAP')
    const[state4,setstate4] = useState('JAVASCRIPT')
    const[state5,setstate5] = useState('REACTJS')
     
    useEffect(() => {setTimeout(() => {
        alert("To display a state");
    },1000)},[state1,state2,state3]);
    const changeName = () =>{
        setstate1('HTML Developer')
    }
    const changeName1 = () =>{
        setstate2('CSS Developer')
    }
    const changeName2 = () =>{
        setstate3('BOOSTRAP Developer')
    }
    const changeName3 = () =>{
        setstate4('JAVASCRIPT Developer')
    }
    const changeName4 = () =>{
        setstate5('REACTJS Developer')
    }
    return(
        <>
       <h3>State1:{state1}</h3>
       <h3>State2:{state2}</h3>
       <h3>State3:{state3}</h3>
       <h3>State4:{state4}</h3>
       <h3>State5:{state5}</h3>
       <button onClick = {changeName}>ChangeName</button>
        <button onClick = {changeName1}>changeName1</button>
        <button onClick = {changeName2}>changeName2</button>
        <button onClick = {changeName3}>changeName3</button>
        <button onClick = {changeName4}>changeName4</button>

       </>
    )
}
export default StateExample3

