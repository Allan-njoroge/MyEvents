import { useState, useEffect } from "react"
import "./Register.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({
    firstName: "",
    secondName: "",
    emailAddress: "",
    phoneNumber: "",
    password: ""
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/auth/register', inputs)
      navigate('/login')
    } catch (err) {
      setError(err.response.data);
    }
  }


  return (
    <section className="section">
      <div className="section-container">
        <form>
          <h1>CREATE AN ACCOUNT</h1>
          <div className="form-div">
            <input type="text" placeholder="First Name" name="firstName" required  onChange={handleChange} />
            <input type="text" placeholder="Second Name" name="secondName" required onChange={handleChange} />
            <input type="email" placeholder="Email Address" name="emailAddress" required onChange={handleChange} />
            <input type="text" placeholder="Phone Number" name="phoneNumber" required onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" required onChange={handleChange} />
            <button type="submit" className="pry-btn" onClick={handleSubmit}>Register</button>
            {error && <p>{error}</p>}
          </div>
          <p>ALREADY HAVE AN ACCOUNT? <Link to={'/login'}>LOGIN</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Register