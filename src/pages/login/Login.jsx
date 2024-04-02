import { Link, NavLink } from "react-router-dom"
import "./login.scss"

export const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>The premier social media app. Konnekt with others or just have fun,
                    we have something for everyone!
                </p>
                <span>Don't have an account yet?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login