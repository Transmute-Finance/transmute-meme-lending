"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Project Name / Logo */}
      <h1 className="text-2xl font-bold text-[#0851FF] cursor-pointer" onClick={() => router.push("/")}>
        Transmute Finance
      </h1>

      {/* Optional Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-[#0851FF] text-white rounded-xl hover:bg-blue-600 transition font-medium">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
