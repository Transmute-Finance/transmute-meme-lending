"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-gray-900 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl py-32 px-6">

        {/* Logo */}
        <h1 className="text-5xl font-bold tracking-tight text-[#0851FF]">
          MemeLend
        </h1>

        {/* Tagline */}
        <p className="mt-4 max-w-xl text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          aliquet mauris vel sapien varius, at hendrerit purus luctus. Sed
          euismod nunc et tortor ultricies, vitae facilisis augue accumsan.
        </p>

        {/* Call to action */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-3 rounded-xl bg-[#0851FF] text-white hover:bg-blue-600 transition font-medium"
            onClick={() => router.push("/deposit-lend")}
          >
            Get Started
          </button>

          <button className="px-8 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition font-medium">
            Connect Wallet
          </button>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="p-6 rounded-2xl bg-white border border-[#0851FF] hover:bg-[#e6f0ff] transition">
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#0851FF] hover:bg-[#e6f0ff] transition">
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#0851FF] hover:bg-[#e6f0ff] transition">
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
