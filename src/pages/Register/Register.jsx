import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password =form.get('password')
        // console.log(name, email, password, photo);
        createUser(email, password)
        .then(res => {
            const user = res.user
            console.log(user);
        }).catch(console.error())
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card shrink-0 lg:w-1/2 md:w-3/4 mx-auto  shadow-2xl bg-base-100">
                <h2 className="text-3xl my-10 text-center">Register</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                    </div>
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

export default Register;