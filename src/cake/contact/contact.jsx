import React, { useState } from 'react';
import './contact.css';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Message: ''
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, name);
    console.log(value);
    setFormData(prev=>({
      ...prev,
      [name] : value
    }));
    console.log(formData)
    
  };

const handleSubmit =  (e) => {
//   e.preventDefault();
  // debugger
  console.log(formData)
  // debugger
  axios.post("http://localhost:3000/cake", formData).then((res)=>{
    // debugger
    console.log(res);
    alert("Data saved")
    })

//   navigate("/");

  console.log(formData)
  // console.log(handleSubmit);
};


  return (
    <div class="first">
    <div className="login_container">
      <div className="login">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="login_fields">
            YOUR NAME:
            <input
              type="text"
              name="name"
              placeholder="Your Name"
            //   value={formData.name}
              onChange={handleChange}
            />
            YOUR EMAIL:
            <input
              type="email"
              name="email"
              placeholder="Your Email"
            //   value={formData.email}
              onChange={handleChange}
            />
            MESSAGE:
            <input
              type="message"
              name="message"
              placeholder="message"
            //   value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
       

        {/* <p className="login_acc">
          Already have an Account?{' '}
          <Link style={{ textDecoration: 'none', color: '#ff4141' }} to="/">
            login here
          </Link>
        </p> */}
        {/* <div className="signin">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default Contact;


