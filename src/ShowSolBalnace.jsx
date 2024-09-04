import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

export function ShowBalance() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = (balance / LAMPORTS_PER_SOL).toFixed(4);
    }
  }

  React.useEffect(() => {
    getBalance();
  }, [wallet.publicKey, connection]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-xl font-semibold mb-2">SOL Balance:</p>
      <div id="balance" className="text-2xl font-bold text-gray-800">Loading...</div>
    </div>
  );
}
