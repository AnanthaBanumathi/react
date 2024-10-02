function ListsPoints2(props)
{
    const mydata = props.myvalue;
    const rl = mydata.map((listvalues)=>
    {
        console.log("done")
        console.log(listvalues);
        return <li>{listvalues}</li>
    });
    return <div className="container">
        <ul>{rl}</ul>
    </div>
}
export default ListsPoints2

// function ListsPoints2(mydata)
// {
//     mydata =  [1000,2000,3000,4000,5000]
//     const rl = mydata.map((listvalues)=>
//     {
//         console.log("done")
//         console.log(listvalues);
//         return <li>{listvalues}</li>
//     });
//     return <div className="container">
//         <ul>{rl}</ul>
//     </div>
// }

// export default ListsPoints2