"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero section takes remaining space */}
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl px-6 mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-[#0851FF] text-center">
          Transmute Finance
        </h1>

        <p className="mt-4 max-w-xl text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          aliquet mauris vel sapien varius, at hendrerit purus luctus. Sed
          euismod nunc et tortor ultricies, vitae facilisis augue accumsan.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-3 rounded-xl bg-[#0851FF] text-white hover:bg-blue-600 transition font-medium"
            onClick={() => router.push("/deposit-lend")}
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
