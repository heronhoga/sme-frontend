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

import { Button } from "@/components/ui/button";

export default function FloatingIcon() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="fixed bottom-8 right-8 z-50 p-6 rounded-full bg-red-600 text-white shadow-lg font-bold text-xl hover:bg-red-800"
            aria-label="Open dialog"
          >
            {/* Replace with your desired icon */}
            Informasi Akun!
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center border p-2 rounded-lg border-black">
              Informasi Penting!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-black font-semibold">
              Karena ini merupakan aplikasi demo, mohon masukkan data berikut
              sesuai dengan role yang akan dicoba. <br /> <br /> untuk login
              sebagai akun Investor:
              <br></br>
              <p className="text-xl">username: investor</p>
              <p className="text-xl">password: investor</p>
              <br></br>Untuk login sebagai akun Ukm:
              <p className="text-xl">username: ukm</p>
              <p className="text-xl">password: ukm</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-red-600 hover:bg-red-800 text-white hover:text-white">
              Tutup
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
