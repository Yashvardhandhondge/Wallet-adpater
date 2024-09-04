import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from 'bs58';
import React from "react";

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    if (!publicKey) throw new Error("Wallet not connected");
    if (!signMessage) throw new Error("Wallet does not support message");

    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature invalid");
    alert(`Success: Message signature: ${bs58.encode(signature)}`);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        id="message"
        placeholder="Message"
        className="block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={onClick}
        className="w-full bg-purple-500 text-white py-3 rounded-md shadow-md hover:bg-purple-600"
      >
        Sign Message
      </button>
    </div>
  );
}
