import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginOnPress = () => {
    navigate("/home");
  };

  return (
    <main className="min-h-screen w-full bg-[linear-gradient(135deg,#E0E1F3_0%,#f2e5ff_100%)]">
      {/* Centered card on full-page gradient */}
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10">
        {/* Card */}
        <div className="mx-auto w-full max-w-sm rounded-xl bg-white p-6 shadow-md md:p-8">
          {/* Logo */}
          <div className="mb-3 flex items-center justify-center">
            <img src={Logo} alt="Boardly" className="h-8 w-auto" />
          </div>
          <h1 className="text-center text-base font-semibold text-indigo-700">
            Welcome Back!
          </h1>
          <p className="mb-6 mt-1 text-center text-xs text-gray-500">
            Log in to your Boardly account to continue.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border-gray-300"
                />
                Remember me
              </label>
              <a
                href="/ForgotPassword"
                className="text-xs font-medium text-indigo-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              onClick={() => {
                handleLoginOnPress();
              }}
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
