import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Login = () => {
    const {userLogin} = useContext(AuthContext)
   const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        
        userLogin(email, password)
        .then(result =>{
            const user = result.user
            // console.log(user);
            navigate(location?.state ? location.state : '/')
        }).catch(console.error())

    }
    return (
        <div>
            <Navbar/>
            <div className="card shrink-0 lg:w-1/2 md:w-3/4 mx-auto  shadow-2xl bg-base-100">
                <h2 className="text-3xl my-10 text-center">Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p className="mv-4 font-bold">Do not Have an account <Link className="text-blue-500" to='/register'>Register Here</Link></p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;