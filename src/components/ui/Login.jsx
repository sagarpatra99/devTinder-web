"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [emailId, setEmailId] = useState("akshay@gmail.com");
  const [password, setPassword] = useState("Akshay@123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:8000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true, // only if you're using cookies in backend
        }
      );

      console.log("Login Success:", res.data);
      alert("Login Successfully"); // Show success message
      router.push("/"); // Redirect to homepage
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn rounded-full"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {signup ? "Sign Up" : "Login"}
      </button>
      <dialog id="my_modal_3" className="modal w-full">
        <div className="modal-box text-black w-80">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg pb-4">
            {signup ? "Create Account" : "Welcome Back!"}
          </h3>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="border pl-3 py-1 rounded-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border pl-3 py-1 rounded-full"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {signup && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border pl-3 py-1 rounded-full"
              />
            )}
          </form>
          <p className="text-xs mt-2">
            {signup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              className="hover:underline text-blue-500 cursor-pointer"
              onClick={() => setSignup(!signup)}
            >
              {signup ? "Login" : "Sign Up"}
            </button>
          </p>
          <button
            className="bg-blue-600 text-white w-full py-1 rounded mt-4 cursor-pointer hover:shadow-2xl hover:bg-blue-700 duration-300 transition-all"
            onClick={handleLogin}
          >
            {signup ? "Sign Up" : "Login"}
          </button>
        </div>
      </dialog>
    </>
  );
}
