// import logo from './logo.svg';
//import './App.css';
//import './state/state.css'; 
//import Reactstate from './state/state';
//import ListsPoints1 from './list1/list1';
//import MyList from './list/keys';
//import ClassProps from './props/props1';
//import ClassComponent from './Classcomp';
//import Abc from './loop';
//import FunctionProps from './functioncomp/props1';
// import ListsPoints2 from './list/list';
//import { Routes } from "react-router-dom";
//import { Route } from "react-router-dom";
//import Signups from "./e_cart/signup/signup";

//import Filters from "./find/find";

//import Lifecycle2 from "./lifecycle/lifecycle";

//import StateExample3 from "./Taskeffect/useeffect";
//import ParentusingGlobalstate from "./usecontext/usecontext";

//import Table from "./useeffect/useeffect1";
import {BrowserRouter,Route,Routes } from 'react-router-dom';

//import StateExample2 from "./useeffect/useeffect";

//import StateExample2 from "./hooks/usestate";

//import StateExample from "./hooks/usestate";

//import Lifecycle2 from "./lifecycle";

//import ClassProps from './props/props1';
//import Comp1 from "./list1/list";
//import MainPage from "./card/mainpage";
import { useState } from "react";
// import Signin from './e_cart/signin/signin';
// import { LatestItems } from "./e_cart/latest/latest";
// import NavbarComponent from "./e_cart/navbar/navbar";
//import { MensItems } from "./e_cart/latest/mens";
//import { WomensItems } from "./e_cart/latest/women";
//import { KidsItems } from "./e_cart/latest/kids";
import Signups from './cake/signup/signup';
import Signin from './cake/signin/signin';
import { LatestItems } from './cake/latest/latest';
import NavbarComponent from './cake/navbar/navbar1';
import { BirthdayItems } from './cake/birthday/birthday';
import { WeddingItems } from './cake/wedding/wedding';
import { ChristmasItems } from './cake/christmas/christmas';
import Contact from './cake/contact/contact';
import About from './cake/about/about';




function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const  handleSignInSuccess = (nameUser) => {
    console.log(nameUser);
    setIsAuthenticated(true);
    localStorage.setItem("username",nameUser)
    console.log("yes")
  };
  return (
    // <div className="App">
    //   <h1>Welcome to ReactJS</h1>
    //   <p>ReactJS is a javascript liabrary</p>
    // </div>
    // <Abc />
    //<ClassComponent />
    //<ClassProps name="arjun"/>
  //  <FunctionProps name="ananthi"/>
  // <ListsPoints2 myvalue = {[100,200,300,400,500]} />
  // <ListsPoints2 />
 // <MyList />
//  <ListsPoints1 />
//<Reactstate  />
//<Lifecycle2 />
    //<StateExample />
 // <StateExample2 />
  //<Comp1  newarr={ [123,456,789]}></Comp1>
  //<Table />
  // <StateExample3 />
  // <BrowserRouter>
  // <Routes>
  //   <Route path="index" element = {<Table/>}/>
  //   <Route path="home" element = {<ParentusingGlobalstate />}/>
  // </Routes>
  // </BrowserRouter>
 // <Lifecycle2 />
//<MainPage />
//<Filters />
<BrowserRouter>
<NavbarComponent isAuthenticated={isAuthenticated} />
   <Routes>
    <Route path="signups" element = {<Signups/>}/>
    <Route path="signin" element = {<Signin handleSignInSuccess={handleSignInSuccess}/>}/>
    <Route path="/latest" element={<LatestItems />}></Route>
    <Route path="/birthday" element={<BirthdayItems />}></Route>
    <Route path="/wedding" element={<WeddingItems />}></Route> 
    <Route path="/christmas" element={<ChristmasItems />}></Route>
    <Route path="contact" element={<Contact />}></Route>
    <Route path="about" element={<About />}></Route>
    {/* <Route path="mens" element={<MensItems />}></Route>
    <Route path="womens" element={<WomensItems />}></Route>
    <Route path="kids" element={<KidsItems />}></Route> */}
   </Routes>
  </BrowserRouter>

   

  );
}

export default App;
