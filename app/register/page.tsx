"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "../api/auth";
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
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import userData from "@/data/user.json";

function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "ukm",
  });
  const [showDialog, setShowDialog] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      //set role to state
      setRole(formData.role);
        setShowDialog(true);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDialogConfirm = () => {
    console.log("Role inside dialog:", role);
    if (role === "ukm") {
      localStorage.setItem("username", userData.users[1].username);
      localStorage.setItem("role", userData.users[1].role);
      localStorage.setItem("firstName", userData.users[1].first_name);
      localStorage.setItem("lastName", userData.users[1].last_name);
      localStorage.setItem("email", userData.users[1].email);
      router.push("/home/ukm");
    } else if (role === "investor") {
      localStorage.setItem("username", userData.users[0].username);
      localStorage.setItem("role", userData.users[0].role);
      localStorage.setItem("firstName", userData.users[0].first_name);
      localStorage.setItem("lastName", userData.users[0].last_name);
      localStorage.setItem("email", userData.users[0].email);
      router.push("/home/investor");
    }
    setShowDialog(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#209cff] to-[#68e0cf]">
        <div
          id="register-card"
          className="h-auto bg-white border border-slate-300 shadow-lg rounded-lg p-10"
        >
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#209cff] to-[#68e0cf]">
      <div
        id="register-card"
        className="h-auto bg-white border border-slate-300 shadow-lg rounded-lg p-4"
      >
    <div className="relative flex items-center justify-center mb-3">
      <div className="absolute left-0 flex items-center">
        <Link href="/" className="flex items-center text-black hover:underline">
          <ChevronLeft className="mr-2 text-xl" />
          <h3 className="text-sm">Kembali</h3>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold text-center">Daftar</h2>
    </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-8">
          {/* Form fields */}
          <div className="mb-1">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-slate-700"
            >
              Nama Depan
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Masukkan nama depan"
              
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-slate-700"
            >
              Nama Belakang
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Masukkan nama belakang"
              
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Masukkan Email"
              
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700"
            >
              Telepon
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Masukkan nomor telepon"
              
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Masukkan username"
              
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Masukkan password"
              
            />
          </div>

          <div className="mb-6 col-span-2">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-slate-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              
            >
              <option value="ukm">UKM</option>
              <option value="investor">Investor</option>
            </select>
          </div>

          <div className="col-span-2">
            <div className="text-center text-blue-800 hover:text-blue-950 hover:underline">
              <Link href="/login">Sudah punya akun? masuk di sini</Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-sky-600 hover:bg-sky-700 col-span-2"
          >
            Daftar
          </button>
        </form>

        {showDialog && (
          <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Berhasil Registrasi</AlertDialogTitle>
                <AlertDialogDescription>
                  Lanjut ke halaman Dashboard?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setShowDialog(false)}>
                  Tidak
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDialogConfirm}>
                  Ya
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
}

export default Register;
