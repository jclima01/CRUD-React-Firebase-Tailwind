import React, { useState } from "react";
import { validationSingIn } from "../Validation/ValidationSingIn";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate} from "react-router-dom"

const Login = () => {
  
const navigate = useNavigate()
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });


  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  
  const {email, password} = values;
  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })

    setErrors(
      validationSingIn({
        ...values,
        [e.target.name]: e.target.value,
      })
    );

  }
  const auth = getAuth();

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      console.log(user);
      navigate('/home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  } catch (error) {
    console.log(error);
  }
  

  setValues({
    email: "",
    password: ""
  })
  setErrors({
    email: "",
    password: ""
  })

}

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form 
          onSubmit={handleSubmit}
          className="text-center">
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Sign in
            </h1>
            <div className="py-2 text-left">
              <input
                type="email"
                name="email"
                value={values.email}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
                onChange={handleChange}
              />
  {errors && <p>{errors.email}</p>}

            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                name="password"
                value={values.password}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Password"
                onChange={handleChange}
              />
              {errors && <p>{errors.password}</p>}
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="text-center mt-12">
            <span>Don't have an account?</span>
            <Link to={'/register'}>
            <button
              className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
            >
              Create One
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
