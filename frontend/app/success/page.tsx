
"use client";

import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Logout failed");
        return;
      }

      alert("Logout successful!");

      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
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
              Authentication
            </h2>

            <p className="text-slate-400 mt-3">
              Your account is secure and ready to go.
            </p>
          </div>

          <div>
            <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>

            <h3 className="text-4xl font-bold leading-tight">
              You're all
              <br />
              set!
            </h3>

            <p className="text-slate-400 mt-5">
              Thank you for being part of our platform.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Authentication
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex items-center justify-center">

          <div className="w-full max-w-md text-center">

            {/* SUCCESS ICON */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <span className="text-4xl">
                ✓
              </span>
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              Login Successfully!
            </h1>

            <p className="text-slate-500 mt-3 leading-7">
              Welcome back! You have successfully logged into your account.
            </p>

            {/* BACK TO HOME */}
            <a
              href="/"
              className="inline-block w-full mt-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Back to Home
            </a>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="w-full mt-4 py-3.5 rounded-xl border border-red-500 text-red-600 font-semibold hover:bg-red-50 transition"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
