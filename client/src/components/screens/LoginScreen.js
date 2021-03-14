import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";



const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {

    
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="bold-line"></div>
      <div className="container">
        <form onSubmit={loginHandler} className="window"> 
          <div className="overlay"></div>
          <div className="content">
            {error && <span className="error-message">{error}</span>}
            <div className="welcome">Sign in</div>
            <div className="subtitle">
                Let's login to website
            </div>
            <div className="input-fields">
              <input
                type="email"
                placeholder="Email"
                className="input-line full-width"
                required
                value= {email}
                onChange={(e)=> setEmail(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
                id="password"
                required
                value= {password}
                onChange={(e)=> setPassword(e.target.value)}
              ></input>
             
            </div>
         
            <Link to="/forgotpassword"><a className="forgot-password">Forgot password ?</a></Link>
            
          
            <div className="spacing facebook">
              <span className="highlight"><i class="fab fa-facebook"></i>Sign in with Facebook</span>
              
            </div>
            <div className="spacing google">
              <span className="highlight"><i class="fab fa-google"></i>Sign in with Google</span>
              
            </div>
            <div className="spacing apple">
            <i class="fab fa-apple"></i>
              <span className="highlight">Sign in with Apple</span>
              
            </div>
            <Link to="/register"><a className="dont-have-account">Don't have account ?</a></Link>
            <div>
              <button  className="ghost-round full-width" >Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen ;
