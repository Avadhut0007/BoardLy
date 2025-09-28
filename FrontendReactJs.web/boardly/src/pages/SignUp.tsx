import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const SignUp: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[linear-gradient(135deg,#4f83ff_0%,#7a5af8_50%,#9333ea_100%)]">
      <div className="mx-auto flex w-full min-h-screen items-center justify-center px-2 py-4 sm:py-8">
        {/* Card */}
        <div className="mx-auto w-full max-w-[350px] rounded-2xl bg-white p-4 shadow-xl md:p-6">
          {/* Heading */}
          <div className="mb-2 text-center">
            <div className="mb-1 flex items-center justify-center">
              <img src={Logo} alt="Boardly" className="h-8 w-auto" />
            </div>
            <h1 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Create Your Boardly
              <br />
              Account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Start organizing your projects and collaborating with your team
              today.
            </p>
          </div>

          {/* Google Button */}
          <button
            type="button" 
            className="flex w-full items-center justify-center gap-2 rounded-md border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
          >
            <span className="inline-block h-4 w-4 rounded-full border border-indigo-400"></span>
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="my-3 flex items-center gap-4">
            <span className="h-px w-full bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <span className="h-px w-full bg-gray-200" />
          </div>

          <form className="space-y-2">
            <div className=" flex flex:row w-full gap-2">
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  FirstName
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  LastName
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="number"
                className="md-1 block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input id="phone"
              type="tel"
              placeholder="123456789"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="confirm"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm"
                type="password"
                placeholder="Re-enter your password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Create Account
            </button>
          </form>

          <p className="mt-2 text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:underline"
            >
              Log In
            </Link>
          </p>

          <p className="mt-1 text-center text-[11px] leading-relaxed text-gray-400">
            By clicking “Create Account”, you agree to Boardly’s{" "}
            <a className="text-indigo-600 hover:underline" href="#terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-indigo-600 hover:underline" href="#privacy">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
