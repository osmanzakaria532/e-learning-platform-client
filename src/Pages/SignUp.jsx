import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../ContextApi/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ form, name, photoUrl, email, password });

    createUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success('Created account successfully');
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="max-w-4xl">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up here!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input type="text" className="input" placeholder="Name" name="name" />
                  <label className="label">Photo URL</label>
                  <input type="text" className="input" placeholder="Photo Url" name="photoUrl" />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" name="email" />
                  <label className="label">Password</label>
                  <input type="password" className="input" placeholder="Password" name="password" />
                  <div>
                    <Link className="link link-hover">Forgot password?</Link>
                  </div>
                  <button className="btn btn-neutral mt-4">Sign up</button>

                  <div className="text-center group mt-5">
                    <Link to="/signin" className="">
                      I have an account! <span className="group-hover:underline">Sign In</span>
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

export default SignUp;
