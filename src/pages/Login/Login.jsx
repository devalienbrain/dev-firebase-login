const Login = () => {
  const handleLogin = () => {};
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h2 className="text-green-700 text-xl">Please Login</h2>

        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 px-5 py-9"
          >
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
              <button className="btn btn-danger">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
