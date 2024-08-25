// import React from 'react';
import './CSS/Loginsignup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCookies } from "react-cookie";

const Loginsignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [error, setError] = useState('');
  const [_, setCookie] = useCookies(["auth-token"]);

  const navigate = useNavigate(); // Initialize useNavigate

const ForgotPassword = () => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!mobile) {
      setError('Mobile number is required.');
      return;
    }
    setError('');

    try {
      const response = await fetch("http://localhost:4000/forgot-password", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });
      const responseData = await response.json();
      
      if (responseData.success) {
        alert('Password recovery instructions have been sent to your mobile number.');
        navigate('/'); // Redirect back to the login page or home
      } else {
        setError(responseData.errors);
      }
    } catch (error) {
      console.error('Error during password recovery:', error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <input 
        type="text" 
        placeholder="Enter your mobile number" 
        value={mobile} 
        onChange={(e) => setMobile(e.target.value)}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (name === 'email') {
      setError('');
    }
  };

  const validateForm = () => {
    if (!formData.email) {
      alert('Email address is required.');
      return false;
    } else if (!/\S+@gmail\.com/.test(formData.email)) {
      setError('Email address must end with @gmail.com.');
      return false;
    }
    setError('');
    return true;
  };

  const login = async () => {
    if (!validateForm()) return;

    console.log("Login Executed", formData);
    let responseData;
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
      
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        setCookie("auth-token", responseData.token);
        navigate("/"); // Redirect to payment page
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const signup = async () => {
    if (!validateForm()) return;

    console.log("Sign Up Executed", formData);
    let responseData;
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
      
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        setCookie("auth-token", responseData.token);
        navigate("/men"); // Redirect to payment page
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input 
              name="username" 
              value={formData.username} 
              onChange={changeHandler} 
              type="text" 
              placeholder="Your Name"
            />
          )}
          <input 
            name="email" 
            value={formData.email} 
            onChange={changeHandler}  
            type="email" 
            placeholder="Email Address" 
            required
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <input 
            name="password" 
            value={formData.password} 
            onChange={changeHandler}  
            type="password" 
            placeholder="Password"
          />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup()  }}>Continue</button>
        {state === "Sign Up"
          ? <p className='loginsignup-login'>Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
          : <p className='loginsignup-login'>Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
        }

        <div className="loginsignup-agree">
          <input type="checkbox" name=" " id=" " />
          <p>By continuing, I agree to use the terms of use & privacy policy</p> 
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
