"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PasswordController } from "@/components/form-controls/password-controller";
import { customStyle } from "@/styles/color";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("admin@gmail.com");
  const [password, setPassword] = useState("1234");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (username === "admin@gmail.com" && password === "1234") {
        toast.success("Login Successful");
        setTimeout(() => router.push("/dashboard"), 1500);
      } else {
        toast.error("Invalid Username or Password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 relative bg-gray-100">

      {/* Background for Desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-100 to-blue-300 -z-10"></div>

      {/* Background for Mobile */}
      <div className="md:hidden absolute inset-0">
        <img
          src="/apartment.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Card */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden relative z-10">

        {/* Left Image */}
        <div className="hidden md:block md:w-1/2 h-[500px]">
          <img
            src="/apartment.jpg"
            alt="Login background"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-9 bg-white/90 backdrop-blur-md">

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-wide text-teal-800">
              SOCIETY-365
            </h2>

            <p className="text-gray-600 text-sm">Built for modern housing societies</p>
          </div>

          {/* <h2 className="text-lg md:text-xl font-bold text-center mb-4 text-gray-500">
           LOGIN
          </h2> */}

          <form className="space-y-5 my-3" onSubmit={handleLogin}>
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="peer w-full border border-gray-300 rounded-lg p-3 outline-none text-sm focus:border-blue-600"
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-700 peer-valid:-top-2 peer-valid:text-xs bg-white/90 px-1"
              >
                Username or Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="peer w-full border border-gray-300 rounded-lg p-3 outline-none text-sm focus:border-blue-600"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-700 peer-valid:-top-2 peer-valid:text-xs bg-white/90 px-1"
              >
                Password
              </label>            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm mb-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Remember me</span>
              </label>

              <a href="#" className="text-teal-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
              >
                {loading ? "Logging in..." : "LOGIN"}
              </button>
            </div>

          </form>

          {/* Sign Up */}
          <p className="text-center mt-2 text-gray-900">
            Don’t have an account?{" "}
            <a href="#" className="text-teal-700 font-semibold hover:underline">
              Sign Up
            </a>
          </p>

          {/* Powered By */}
          <div className="mt-6 text-center">
            <a
              href="https://nexspire.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-teal-600 transition"
            >
              Powered by NexSpire Technologies
            </a>
          </div>
        </div>
      </div>

      {/* Global keyframes for toast progress underline */}
      <style jsx global>{`
        @keyframes progress-right-left {
          from { width: 100%; }
          to { width: 0; }
        }
      `}</style>
    </div>
  );
}
