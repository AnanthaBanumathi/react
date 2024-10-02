function Comp2({value})
{
    let arr5=value.map((data,index) => {
        console.log(data);
        return <li>{index+1}  {data}</li>
    })
    return(
        <div>
            <ul>{arr5}</ul>
        </div>
    )
    }
export default Comp2;