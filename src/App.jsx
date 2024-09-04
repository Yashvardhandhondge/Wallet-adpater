import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { Airdrop } from "./Airdrop";
import '@solana/wallet-adapter-react-ui/styles.css';
import { ShowBalance } from "./ShowSolBalnace";
import { SignMessage } from "./SignMessage";
import { SendTokens } from "./SendTokens";
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

function App() {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/DEhoo-faZJyJO03UWMXSsKycjKrK_w9G">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <WalletMultiButton className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700" />
                <WalletDisconnectButton className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Airdrop />
                <SendTokens />
                <ShowBalance />
                <SignMessage />
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;