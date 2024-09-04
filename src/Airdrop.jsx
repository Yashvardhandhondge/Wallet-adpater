import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    const amount = document.getElementById("amount").value;
    try {
      await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
      alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    } catch (error) {
      alert("Failed to request airdrop: " + error.message);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Request Airdrop</h2>
      <input
        type="text"
        id="amount"
        placeholder="Amount"
        className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={requestAirdrop}
        className="w-full bg-green-500 text-white py-3 rounded-md shadow-md hover:bg-green-600"
      >
        Request Airdrop
      </button>
    </div>
  );
}
