import { React, useState } from "react";
import { GenderCheckBox } from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

export const SignUp = () => {
  //we need to on input coming from signup

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs); // this function will handel input submits
  };

  // return (
  //   <div className="flex flex-col min-w-96 justify-center items-center mx-auto">
  //     <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
  //       <h1 className="text-3xl fond-semibold text-blue-300 text-center">
  //         SignUp
  //         <span className="text-3xl font-bold text-blue-500"> PulseTalk</span>
  //       </h1>
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label className="label p-2">
  //             <span className="text-base label-text">Full Name</span>
  //           </label>
  //           <input
  //             type="text"
  //             placeholder="John  Doe"
  //             className="input input-bordered w-full max-w-xs"
  //             value={inputs.fullName} //prop for fullName
  //             onChange={(e) =>
  //               setInputs({ ...inputs, fullName: e.target.value })
  //             }
  //           />
  //         </div>
  //         <div>
  //           <label className="label p-2">
  //             <span className="text-base label-text">Username</span>
  //           </label>
  //           <input
  //             type="text"
  //             placeholder="johndoe"
  //             className="input input-bordered w-full max-w-xs"
  //             value={inputs.username}
  //             onChange={(e) =>
  //               setInputs({ ...inputs, username: e.target.value })
  //             }
  //           />
  //         </div>
  //         <div>
  //           <label className="label p-2">
  //             <span className="text-base label-text">Password</span>
  //           </label>
  //           <input
  //             type="password"
  //             placeholder="Enter password"
  //             className="input input-bordered w-full max-w-xs"
  //             value={inputs.password}
  //             onChange={(e) =>
  //               setInputs({ ...inputs, password: e.target.value })
  //             }
  //           />
  //         </div>
  //         <div>
  //           <label className="label p-2">
  //             <span className="text-base label-text">Confirm Password</span>
  //           </label>
  //           <input
  //             type="password"
  //             placeholder="Confirm password"
  //             className="input input-bordered w-full max-w-xs"
  //             value={inputs.confirmPassword}
  //             onChange={(e) =>
  //               setInputs({ ...inputs, confirmPassword: e.target.value })
  //             }
  //           />
  //         </div>

  //         <GenderCheckBox
  //           onCheckboxChange={handleGenderChange}
  //           selectGender={inputs.gender}
  //         />

  //         <div className="flex mt-2 justify-between">
  //           <Link
  //             to="/login"
  //             className="text-base text-blue-500 hover:text-blue-800 hover:underline"
  //           >
  //             Already have an account?
  //           </Link>
  //         </div>
  //         <button
  //           className="btn btn-block btn-sm mt-2 text-white"
  //           disabled={loading}
  //         >
  //           {loading ? (
  //             <span className="loading loading-spinner"></span>
  //           ) : (
  //             <span>Sign Up</span>
  //           )}
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* SignUp Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-white/80 text-lg">
              Join <span className="font-bold text-white">PulseTalk</span> today
            </p>
          </div>

          {/* SignUp Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-white/90 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50 outline-none transition-all duration-200"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Username Input */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="johndoe"
                  className="w-full pl-12 pr-4 py-3 bg-white/90 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50 outline-none transition-all duration-200"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full pl-12 pr-4 py-3 bg-white/90 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50 outline-none transition-all duration-200"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium block">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full pl-12 pr-4 py-3 bg-white/90 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50 outline-none transition-all duration-200"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Gender Checkbox */}
            <div className="">
              <GenderCheckBox
                onCheckboxChange={handleGenderChange}
                selectGender={inputs.gender}
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-purple-600 py-3.5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-6"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-3 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>

            {/* Divider */}
            {/* <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/80">
                  Or sign up with
                </span>
              </div>
            </div> */}

            {/* Social SignUp Buttons */}
            {/* <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </div> */}

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-white/90 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-white font-semibold hover:underline transition-all"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <p className="text-center text-white/70 text-sm mt-6">
          By signing up, you agree to our Terms & Privacy Policy
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
