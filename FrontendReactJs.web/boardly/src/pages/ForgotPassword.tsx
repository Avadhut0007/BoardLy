import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[linear-gradient(135deg,#4f83ff_0%,#7a5af8_50%,#9333ea_100%)]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10">
        <div className="mx-auto w-full max-w-sm rounded-xl bg-white p-6 shadow-md md:p-8">
          <h4 className=" text-gray-700 text-center text-base font-semibold">
            Reset your password
          </h4>
          <p className="mb-6 mt-1 text-center text-xs text-gray-500">
            Enter the email address you registered with and we'll send you
            instructions to reset your password.
          </p>

          <form  className="space-y-4">
            <div>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Send Reset Link
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-gray-500">
            <Link to="/login" className="font-medium text-indigo-600 hover:underline">
                Back to Login
              </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
