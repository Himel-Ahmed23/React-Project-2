import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: "success",
                    title: "Successfully SignIn",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
        event.target.reset();
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="space-y-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-error">Sign In now!</h1>
                    </div>
                    <div className="card bg-base-200 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />

                                <div>
                                    <span>Don't have an Account? <Link className="ml-1 link link-hover text-error" to="/signUp">SignUp</Link></span>
                                </div>

                                <input className='btn btn-error mt-4 text-white' type="submit" value="Sign In" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;