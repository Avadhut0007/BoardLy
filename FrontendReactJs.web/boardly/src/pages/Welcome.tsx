import React from "react";
import SelectionImage from "../assets/Selection.png";

const Welcome: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-white font-inter">
      <section className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16 xl:pl-[104px]">
        {/* Left column */}
        <div className="flex flex-col items-start justify-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[28px] font-bold text-indigo-600">
            <span>✶</span>
            <span className="italic text-gray-800" style={{color:"#6A6AD2"}}>Boardly</span>
          </div>

          {/* Heading - exact spec: width 464px, 60/60 Inter 800 */}
          <h1 className="w-[min(464px,100%)] text-[42px] font-extrabold leading-[44px] tracking-tight sm:text-[54px] sm:leading-[56px] md:text-[60px] md:leading-[60px]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Organize work,
              <br />
              your way.
            </span>
          </h1>

          {/* Buttons */}
          <div className="mt-2 flex items-center gap-4">
            <a
              href="#signup"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </a>
            <a
              href="#login"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </a>
          </div>
        </div>

        {/* Right column image */}
        <div className="order-first flex w-full items-center justify-center md:order-none">
          <img
            src={SelectionImage}
            alt="Boardly welcome illustration"
            className="w-full max-w-[580px] rounded-2xl shadow-lg md:max-w-[720px]"
          />
        </div>
      </section>
    </main>
  );
};

export default Welcome;
