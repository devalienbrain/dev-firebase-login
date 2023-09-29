import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "../../firebase/firebase.config";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(auth, name, email, password);
    // console.log("hello mama");
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h2 className="text-red-500 text-xl">Please Register</h2>

        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-4 px-5 py-9"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />

            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
