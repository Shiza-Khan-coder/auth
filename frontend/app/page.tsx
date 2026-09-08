
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
"http://localhost:5000/api/auth/register",        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      console.log("Registration successful:", data);

      alert("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl min-h-150 bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        {/* LEFT SIDE */}
        <div className="hidden md:flex md:w-1/2 bg-slate-900 text-white p-12 flex-col justify-between">

          <div>
            <h2 className="text-3xl font-bold">
              Welcome!
            </h2>

            <p className="text-slate-400 mt-3">
              Create your account and get started with us.
            </p>
          </div>

          <div>
            <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>

            <h3 className="text-4xl font-bold leading-tight">
              Build your account.
              <br />
              Start your journey.
            </h3>

            <p className="text-slate-400 mt-5">
              Join us today and enjoy a simple and secure experience.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Authentication
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex items-center">

          <div className="w-full max-w-md mx-auto">

            <h1 className="text-3xl font-bold text-slate-900">
              Create Account
            </h1>

            <p className="text-slate-500 mt-2 mb-8">
              Enter your details to create your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
              >
                Create Account
              </button>

            </form>

            <p className="text-center text-sm text-slate-500 mt-7">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Login
              </a>
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}
