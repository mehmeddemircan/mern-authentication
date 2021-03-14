import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

import{toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return   toast.error("Passwords dont match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );
        toast.success("succesfully registered great!")
      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
        
      
      toast.error(error.response.data.error);
 
    }
  };



  return (
    <div>
      <div className="bold-line"></div>
      
      <div className="container">
        <form onSubmit={registerHandler} className="window">
          {error && {error}}
          <div className="overlay"></div>
          <div className="content">
            
       
            <div className="welcome">Sign Up</div>
            <div className="subtitle">
              We're almost done. Before using our services you need to create an
              account.
            </div>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                className="input-line full-width"
                required
                minLength="4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                type="email"
                placeholder="Email"
                className="input-line full-width"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-line full-width"
                id="confirmpassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <Link to="/login"><a className="already-account">Have already account ?</a></Link>
            or continue with
            <div className="spacing facebook">
              <span className="highlight">
                <i class="fab fa-facebook"></i>Sign up with Facebook
              </span>
            </div>
            <div>
              <button className="ghost-round full-width">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
