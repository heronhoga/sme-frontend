"use client";
import React, { useState, useEffect } from "react";
import InvestorSidebar from "@/my-components/investor-sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

function InvestConfirm() {
  const [username, setUsername] = useState<string>("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
  }, []);

  const { toast } = useToast();
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <InvestorSidebar username={username} />

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <div
          id="confirm-card"
          className="w-full mx-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-300 p-4 shadow-lg"
        >
          <h1 className="text-2xl font-bold text-white mb-3">
            Form Konfirmasi Investasi
          </h1>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="space-y-2"
          >
            {/* Nama */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                id="nama"
                type="text"
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Masukkan nama Anda"
              />
            </div>
            {/* Kontak */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="kontak"
              >
                Kontak
              </label>
              <input
                id="kontak"
                type="text"
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Masukkan kontak Anda"
              />
            </div>
            {/* Jumlah Investasi */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="jumlah"
              >
                Jumlah yang Ingin Diinvestasikan
              </label>
              <input
                id="jumlah"
                type="number"
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Masukkan jumlah investasi"
              />
            </div>
            {/* Alasan */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="alasan"
              >
                Alasan Investasi
              </label>
              <textarea
                id="alasan"
                rows={4}
                className="w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-orange-500"
                placeholder="Ceritakan alasan Anda ingin berinvestasi"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="py-2 px-1 border border-white text-white font-bold rounded-lg focus:outline-none focus:ring focus:ring-orange-500">
                    Baca Syarat dan Ketentuan
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Syarat dan Ketentuan</AlertDialogTitle>
                  </AlertDialogHeader>
                  <div className="overflow-y-auto max-h-64 px-4 text-sm text-gray-600 space-y-4">
                    <p>
                      **1. Pengenalan:** Dengan melakukan investasi, Anda
                      menyetujui syarat dan ketentuan berikut. Harap baca dengan
                      saksama sebelum melanjutkan.
                    </p>
                    <p>
                      **2. Risiko Investasi:** Investasi memiliki risiko
                      termasuk, namun tidak terbatas pada, kehilangan modal.
                      Pastikan Anda memahami risiko-risiko tersebut sebelum
                      memutuskan untuk berinvestasi.
                    </p>
                    <p>
                      **3. Penggunaan Dana:** Dana yang Anda investasikan akan
                      digunakan sesuai dengan tujuan proyek. Kami tidak
                      bertanggung jawab atas kerugian yang diakibatkan oleh
                      penyalahgunaan dana oleh pihak ketiga.
                    </p>
                    <p>
                      **4. Kerahasiaan Data:** Kami akan melindungi data pribadi
                      Anda sesuai dengan kebijakan privasi kami. Data Anda tidak
                      akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.
                    </p>
                    <p>
                      **5. Hak dan Kewajiban:** Anda berhak mendapatkan
                      informasi transparan mengenai perkembangan investasi Anda.
                      Anda juga bertanggung jawab untuk memberikan informasi
                      yang benar saat mendaftar.
                    </p>
                    <p>
                      **6. Perubahan Ketentuan:** Kami berhak mengubah syarat
                      dan ketentuan ini kapan saja. Perubahan akan diberitahukan
                      kepada investor melalui email atau platform.
                    </p>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction className="bg-orange-600">
                      Setuju
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    type="submit"
                    className="my-3 w-full py-3 bg-white text-orange-600 font-bold rounded-md hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-500"
                  >
                    Konfirmasi Investasi
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Konfirmasi Investasi</AlertDialogTitle>
                    <AlertDialogDescription>
                      Apakah Anda yakin ingin melakukan investasi? Investasi
                      Anda tidak dapat diubah setelah dikonfirmasi.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-orange-500"
                      onClick={() => {
                        toast({
                          title: "Sukses!",
                          description: "Pengajuan investasi berhasil dikirim.",
                          className: "border border-2 border-orange-300 text-orange-600 font-bold shadow-lg",
                        });
                      }}
                    >
                      Lanjutkan
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InvestConfirm;
