import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WalletKitProvider } from "@gokiprotocol/walletkit";

ReactDOM.render(
  <React.StrictMode>
    <WalletKitProvider
      defaultNetwork="devnet"
      app={{
        name: "My App",
      }}
    >
      <App />
    </WalletKitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
