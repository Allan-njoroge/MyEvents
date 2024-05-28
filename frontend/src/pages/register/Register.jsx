import "./Register.css"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <section className="section">
      <div className="section-container">
        <form>
          <h1>CREATE AN ACCOUNT</h1>
          <div className="form-div">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="pry-btn">Register</button>
          </div>
          <p>ALREADY HAVE AN ACCOUNT? <Link to={'/login'}>LOGIN</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Register