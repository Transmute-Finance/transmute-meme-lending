export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl py-32 px-6">
        {/* Logo */}
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          MemeLend
        </h1>

        {/* Tagline */}
        <p className="mt-4 max-w-xl text-center text-lg text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          aliquet mauris vel sapien varius, at hendrerit purus luctus. Sed
          euismod nunc et tortor ultricies, vitae facilisis augue accumsan.
        </p>

        {/* Call to action */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium">
            Connect Wallet
          </button>

          <button className="px-8 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition font-medium">
            Explore Markets
          </button>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-600 transition">
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor</h3>
            <p className="text-zinc-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-600 transition">
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor</h3>
            <p className="text-zinc-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-600 transition">
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor</h3>
            <p className="text-zinc-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
