import React from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(to),
      lamports: amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <input
        id="to"
        type="text"
        placeholder="To"
        className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        id="amount"
        type="text"
        placeholder="Amount"
        className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={sendTokens}
        className="w-full bg-teal-500 text-white py-3 rounded-md shadow-md hover:bg-teal-600"
      >
        Send
      </button>
    </div>
  );
}
