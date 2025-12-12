export default function DepositLend() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-[#0851FF] mb-6">
          Deposit & Lend
        </h1>

        {/* Deposit Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Deposit USD</h2>
          <div className="p-6 bg-white border border-[#0851FF] rounded-2xl shadow-sm flex flex-col gap-4">
            <input
              type="number"
              placeholder="Enter amount to deposit"
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0851FF]"
            />
            <button className="px-6 py-3 bg-[#0851FF] text-white rounded-xl hover:bg-blue-600 transition font-medium">
              Deposit
            </button>
          </div>
        </div>

        {/* Lend Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lend Meme Tokens</h2>
          <div className="p-6 bg-white border border-[#0851FF] rounded-2xl shadow-sm flex flex-col gap-4">
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0851FF]">
              <option>Select token</option>
              <option>MemeToken 1</option>
              <option>MemeToken 2</option>
              <option>MemeToken 3</option>
            </select>
            <input
              type="number"
              placeholder="Amount to lend"
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0851FF]"
            />
            <button className="px-6 py-3 bg-[#0851FF] text-white rounded-xl hover:bg-blue-600 transition font-medium">
              Lend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
