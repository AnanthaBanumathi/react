const mydata = [100,200,500,400,300];
function ListKey (props)
{
    return(
        <li> {key} {item}</li>
    );
}
function MyList(props){
    const listItem = props.myvalue.map((listvalue,index)=>
        <ListKey keys = {index} item = {listvalue} />
    );
    return(
        <div>
            <h2>Correct Key Usage Example</h2>
            <ul>
                {listItem}
            </ul>
        </div>
    );
}
export default MyList