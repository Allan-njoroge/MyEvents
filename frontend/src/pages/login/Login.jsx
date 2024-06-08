import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    emailAddress: "",
    password: ""
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (err) {
      console.log(err)
      // setError(err.response.data);
    }
  }

  return (
    <section className="section">
      <div className="section-container">
        <form action="" data-aos="fade-up">
          <h1>LOGIN TO YOUR ACCOUNT</h1>
          <div className="form-div">
            <input type="email" className="email" placeholder="Email Address" name="emailAddress" required onChange={handleChange} />
            <input type="password" className="password" placeholder="Password" name="password" required onChange={handleChange} />

            <button type="submit" className="pry-btn" onClick={handleSubmit}>LOGIN</button>
            { error && <p className="auth-msg">{error}</p> }
          </div>
          <p>DON'T HAVE AN ACCOUNT? <Link to={'/register'}>REGISTER</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login;