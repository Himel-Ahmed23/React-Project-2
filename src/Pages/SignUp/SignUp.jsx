import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password, photo, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully SignUp",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate('/')

        updateUserProfile(name, photo)
          .then(() => { })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
    event.target.reset();
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="space-y-5">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-error">Sign Up now!</h1>
          </div>
          <div className="card bg-base-200 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="name"
                  className="input"
                  name="name" required
                  placeholder="Name"
                />

                <label className="fieldset-label">Photo Url</label>
                <input
                  type="text"
                  className="input"
                  name="photo"
                  placeholder="Photo Url"
                />

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email" required
                  placeholder="Email"
                />

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password" required
                  placeholder="Password"
                />

                <div>
                  <span>
                    Already have an Account?{" "}
                    <Link
                      className="ml-1 link link-hover text-error"
                      to="/signIn"
                    >
                      SignIn
                    </Link>
                  </span>
                </div>

                <input
                  className="btn btn-error mt-4 text-white"
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
