import React,{createContext,useContext,useState} from 'react';
const UserContext = createContext()
export default function ParentusingGlobalstate(){
    const[user,setuser] = useState('React2')
    return(
        <UserContext.Provider value={user}>
            <h1>ParentUsinglocalstate</h1>
            <Component2 />
        </UserContext.Provider>
    )
}
function Component2(){
    return(
        <>
        <h3>Component 2</h3>
        <Component3 />
            </>
    )
}
function Component3(){
    return(
        <>
        <h3>Component 3</h3>
        <Component4 />
            </>
    )
}
function Component4(){
    return(
        <>
        <h3>Component 4</h3>
        <Component5  /></>

    )
}

function Component5(){
    const user = useContext(UserContext)
    return(
        <>
        <h3>Component 5</h3>
        <h3> {`this is are out of component5 ${user}`}</h3></>
    )
}