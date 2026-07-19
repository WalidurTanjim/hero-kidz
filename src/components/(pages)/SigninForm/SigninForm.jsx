"use client";
import React, { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const signinInfo = { email, password };
    console.log(signinInfo)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Email Field */}
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text text-base-content/70">Email</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <EnvelopeIcon className="h-5 w-5 text-base-content/40" />
          </div>
          <input
            type="email"
            placeholder="you@example.com"
            name="email"
            className="input input-bordered w-full pl-10 bg-base-100 text-base-content"
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text text-base-content/70">Password</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LockClosedIcon className="h-5 w-5 text-base-content/40" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            className="input input-bordered w-full pl-10 pr-10 bg-base-100 text-base-content"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              className="text-base-content/40 hover:text-base-content/70"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Remember & Forgot Password */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-sm checkbox-warning" />
          <span className="text-sm text-base-content/70">Remember me</span>
        </div>
        <a href="#" className="text-sm text-warning hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Sign In Button */}
      <button type="submit" className="btn btn-warning w-full text-white">
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;
