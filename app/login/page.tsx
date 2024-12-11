"use client";
import React, { useState } from "react";
import { login } from "../api/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [role, setRole] = useState("");
  const [errorDialog, setErrorDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login(username, password);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.data.username);

        setRole(response.data.data.role);
        setShowDialog(true);
      } else if (response.status === 400) {
        setErrorDialog(true);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDialogConfirm = () => {
    console.log("Role inside dialog:", role);
    if (role === "ukm") {
      router.push("/home/ukm");
    } else if (role === "investor") {
      router.push("/home/investor");
    }
    setShowDialog(false);
  };

  const handleErrorDialogClose = () => {
    setErrorDialog(false); 
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#209cff] to-[#68e0cf]">
      <div
        id="login-card"
        className="w-96 h-auto bg-white border border-slate-300 shadow-lg rounded-lg p-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-sky-600 hover:bg-sky-700"
          >
            Masuk
          </button>
        </form>

        {showDialog && (
          <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Berhasil Masuk</AlertDialogTitle>
                <AlertDialogDescription>
                  Lanjut ke halaman Dashboard
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  onClick={handleDialogConfirm}
                  className="bg-sky-600 hover:bg-sky-700"
                >
                  Ya
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}

        {errorDialog && (
          <AlertDialog open={errorDialog} onOpenChange={setErrorDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Gagal Masuk</AlertDialogTitle>
                <AlertDialogDescription>
                  Username atau password yang Anda masukkan salah!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={handleErrorDialogClose} className="bg-red-600 hover:bg-red-700 text-white">
                  Tutup
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
}

export default Login;
