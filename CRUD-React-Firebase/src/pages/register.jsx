import React, { useState } from "react";
import { validationSingOut } from "../Validation/validationSingOut";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validationSingOut({
        ...values,
        [e.target.name]: e.target.value,
      })
    );
  };
  
  const auth = getAuth();



  const handleSubmit = async (e) => {
    e.preventDefault();

   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ..
        console.log(user)
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    

    setValues({
      name: "",
      email: "",
      password: "",
    });
    setErrors({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form 
          onSubmit={handleSubmit}
          className="text-center">
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Register
            </h1>
            <div className="py-2 text-left">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Name"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="email"
                name="email"
                value={values.email}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
                onChange={handleChange}
              />
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
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Sing out
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
