import React from "react";
import ReactDOM from "react-dom";
import { WalletKitProvider } from "@gokiprotocol/walletkit";

import App from "./App";
import "./index.css";

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
