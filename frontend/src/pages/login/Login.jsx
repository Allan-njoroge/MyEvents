import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <section className="section">
      <div className="section-container">
        <form action="">
          <h1>LOGIN TO YOUR ACCOUNT</h1>
          <div className="form-div">
            <input type="email" class="email" placeholder="Email Address" required />
            <input type="password" class="password" placeholder="Password" required />

            <button type="submit" className="pry-btn">LOGIN</button>
            <p className="auth-msg"></p>
          </div>
          <p>DON'T HAVE AN ACCOUNT? <Link to={'/register'}>REGISTER</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login;