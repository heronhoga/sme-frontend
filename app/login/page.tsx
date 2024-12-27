"use client";
import React, { useState, FormEvent } from "react"; 
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
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import userData from "@/data/user.json";

interface LoginResponse {
  data?: {
    data: any;
    username: string;
    role: string;
  };
  message?: string;
}

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [role, setRole] = useState<string>("");
  const [errorDialog, setErrorDialog] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // match username and password from userData.json
      const user = userData.users.find(
        (user) => user.username === username && user.password === password
      );
      
      if (!user) {
        setErrorDialog(true);
        return;
      }

      setRole(user.role);
      setShowDialog(true);
      // set data to local storage
      localStorage.setItem("username", user.username);
      localStorage.setItem("role", user.role);
      localStorage.setItem("firstName", user.first_name);
      localStorage.setItem("lastName", user.last_name);
      localStorage.setItem("email", user.email);
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
        className="w-96 h-auto bg-white border border-slate-300 shadow-lg rounded-lg p-4"
      >
        <div className="relative flex items-center justify-center mb-3">
          <div className="absolute left-0 flex items-center">
            <Link
              href="/"
              className="flex items-center text-black hover:underline"
            >
              <ChevronLeft className="mr-2 text-xl" />
              <h3 className="text-sm">Kembali</h3>
            </Link>
          </div>
          <h2 className="text-2xl font-semibold text-center">Daftar</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
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
              placeholder="Masukkan username Anda"
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
              placeholder="Masukkan password Anda"
              required
            />
          </div>
          <div className="text-center mb-4 text-blue-800 hover:text-blue-950 hover:underline">
            <Link href="/register">Belum punya akun? Daftar sekarang</Link>
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
                <AlertDialogCancel
                  onClick={handleErrorDialogClose}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
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
