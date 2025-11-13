import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../ContextApi/AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ form, email, password });

    signInUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success('Sign in successfully');
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.code);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="max-w-4xl">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignIn} className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" name="email" />
                  <label className="label">Password</label>
                  <input type="password" className="input" placeholder="Password" name="password" />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <div className="text-center group mt-5">
                    <Link to="/signup" className="">
                      Don't have an account ? <span className="group-hover:underline">Sign Up</span>
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
