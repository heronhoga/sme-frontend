"use client";
import React, { useState, useEffect } from "react";
import UkmSidebar from "@/my-components/ukm-sidebar";

function ProfileAccountUkm() {
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
    setFirstName(localStorage.getItem("firstName") ?? "");
    setLastName(localStorage.getItem("lastName") ?? "");
    setBirthDate(localStorage.getItem("birthDate") ?? "");
    setCountry(localStorage.getItem("country") ?? "");
    setAddress(localStorage.getItem("address") ?? "");
    setPostalCode(localStorage.getItem("postalCode") ?? "");
    setProfilePicture(
      localStorage.getItem("profilePicture") ??
        "https://via.placeholder.com/150"
    );
  }, []);

  const handleSaveChanges = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("country", country);
    localStorage.setItem("address", address);
    localStorage.setItem("postalCode", postalCode);
    localStorage.setItem("profilePicture", profilePicture);
    alert("Changes saved!");
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <UkmSidebar username={username} />
      <div className="flex-1 p-4">
        <div className="p-4 border-2 border-blue-400 rounded-lg w-full h-full grid grid-cols-2 gap-4">
          {/* Personal Information */}
          <div className="p-4">
            <h3 className="font-semibold text-xl border border-blue-400 text-center rounded-lg shadow-lg text-white bg-gradient-to-r from-[#209cff] to-[#68e0cf] p-2">
            Informasi Pribadi
            </h3>
            <div className="bg-gradient-to-tr from-[#209cff] to-[#68e0cf] p-4 rounded-lg mt-4 text-white">
              <div className="flex flex-col items-center justify-center mb-4 space-y-2">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="rounded-full w-24 h-24 object-cover border-2 border-white"
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 shadow-lg"
                >
                  Pilih Foto
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="hidden"
                />
                <span className="text-white text-sm">
                  {profilePicture === "https://via.placeholder.com/150"
                    ? "Tidak ada foto"
                    : "Foto tersedia"}
                </span>
              </div>

              <div className="space-y-2">
                <label>
                  <strong>Username:</strong>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  />
                </label>
                <label>
                  <strong>Nama Depan:</strong>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  />
                </label>
                <label>
                  <strong>Nama Belakang:</strong>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  />
                </label>
                <label>
                  <strong>Tanggal Lahir:</strong>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  />
                </label>
                <label>
                  <strong>Negara:</strong>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  />
                </label>
                <label>
                  <strong>Alamat:</strong>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  ></textarea>
                </label>
                <label>
                  <strong>Kode pos:</strong>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="block w-full bg-white text-black p-1 rounded-lg"
                  />
                </label>
              </div>
              <button
                onClick={handleSaveChanges}
                className="bg-blue-600 border text-sm text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-800"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className="p-4 border-l-2 border-blue-400">
            <h3 className="font-semibold text-xl border border-blue-400 text-center rounded-lg shadow-lg text-white bg-gradient-to-r from-[#209cff] to-[#68e0cf] p-2">
              Application Settings
            </h3>
            <div className="mt-4 space-y-4 bg-gradient-to-tr from-[#209cff] to-[#68e0cf] p-4 rounded-lg text-white">
              <div className="flex items-center justify-between">
                <span>Notify me when new updates are available</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Send email updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Show online status</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Enable dark mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Allow push notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Receive monthly reports</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAccountUkm;
