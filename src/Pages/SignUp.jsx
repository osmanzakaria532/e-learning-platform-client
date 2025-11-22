import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../ContextApi/AuthContext';

const SignUp = () => {
  const [passwordError, setPasswordError] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser, createUser, signInWithGoogle, updateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setPasswordError('');
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must contain at least one Uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError('Password must contain at least one Lowercase letter.');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res);

        const newUser = {
          name,
          email,
          image: photoUrl,
        };

        return updateUser({ displayName: name, photoURL: photoUrl }).then(() => {
          setUser((prev) =>
            prev
              ? { ...prev, displayName: name, photoURL: photoUrl }
              : { displayName: name, photoURL: photoUrl, email },
          );

          return fetch('https://e-learning-platform-server-osmanzakaria.vercel.app/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('data after user save', data);
        toast.success('Created account successfully');

        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message || 'Something went wrong');
      });
  };

  const handleSignInWithGoogle = () => {
    console.log('SignIn With Google');
    signInWithGoogle()
      .then((result) => {
        toast.success(`Sign In Successfully`);
        console.log(result.user);

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        setUser(result.user);

        // create user in database
        fetch('https://e-learning-platform-server-osmanzakaria.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('data after user save', data);
          });

        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.code || 'Google sign in failed');
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
                  <div className="relative">
                    <input
                      type={show === false ? 'password' : 'text'}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <div
                      onClick={() => setShow(!show)}
                      className="absolute right-7 top-1/2 transform -translate-y-1/2 z-50"
                    >
                      {show ? <FaEye className="cursor-pointer" /> : <FaEyeSlash />}
                    </div>
                  </div>
                  <p className="text-red-400 my-2">{passwordError}</p>
                  <div>
                    <Link className="link link-hover">Forgot password?</Link>
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex-1">
                      <button className="btn btn-neutral w-full">Sign up</button>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={handleSignInWithGoogle}
                        className="btn border border-[#2da973]"
                      >
                        <FaGoogle className="text-lg" />
                      </button>
                    </div>
                  </div>
                  {/* <button className="btn btn-neutral mt-4"></button> */}

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
