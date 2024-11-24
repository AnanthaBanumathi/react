import React,{ useState,useEffect } from "react";

const sampleData = [
    {name:"Ananthi",age:19,location:"Tirunelveli"},
    {name:"Suresh",age:18,location:"Tenkasi"}
]
function Table(){ 
    const [data,setData] = useState([]);
    useEffect(() => {
        console.log("done");
        setTimeout(() =>{
            setData(sampleData);
        },3000);
    });
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
            </tr>
                 {data.length === 0 && <h3>Loading....</h3>}
            {data.map((dat) => (
                  <tr>
                    <td>{dat.name}</td>
                    <td>{dat.age}</td>
                    <td>{dat.location}</td>
                  </tr>
            ))}
        
        </table>

    )
}
export default Table