"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function DepositLend() {
  const [depositAmount, setDepositAmount] = useState("");
  const [lendAmount, setLendAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("");

  const depositInvalid = Number(depositAmount) <= 0;
  const lendInvalid = Number(lendAmount) <= 0 || selectedToken === "";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0851FF] mb-6">
            Deposit & Lend
          </h1>

          {/* Deposit Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Deposit USD</h2>
            <div className="p-6 bg-white border border-[#0851FF] rounded-2xl shadow-sm flex flex-col gap-3">
              <input
                type="number"
                min="0"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                placeholder="Enter amount to deposit"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0851FF]"
              />

              {depositInvalid && depositAmount && (
                <p className="text-sm text-red-500">
                  Amount must be greater than 0
                </p>
              )}

              <button
                disabled={depositInvalid}
                className={`px-6 py-3 rounded-xl font-medium transition ${
                  depositInvalid
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#0851FF] text-white hover:bg-blue-600"
                }`}
              >
                Deposit
              </button>
            </div>
          </div>

          {/* Lend Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Lend Meme Tokens</h2>
            <div className="p-6 bg-white border border-[#0851FF] rounded-2xl shadow-sm flex flex-col gap-3">
              <select
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0851FF]"
              >
                <option value="">Select token</option>
                <option value="meme1">MemeToken 1</option>
                <option value="meme2">MemeToken 2</option>
                <option value="meme3">MemeToken 3</option>
              </select>

              <input
                type="number"
                min="0"
                value={lendAmount}
                onChange={(e) => setLendAmount(e.target.value)}
                placeholder="Amount to lend"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0851FF]"
              />

              {lendInvalid && (lendAmount || selectedToken) && (
                <p className="text-sm text-red-500">
                  Select a token and enter an amount greater than 0
                </p>
              )}

              <button
                disabled={lendInvalid}
                className={`px-6 py-3 rounded-xl font-medium transition ${
                  lendInvalid
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#0851FF] text-white hover:bg-blue-600"
                }`}
              >
                Lend
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
