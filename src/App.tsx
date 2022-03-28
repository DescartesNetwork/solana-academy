import { Button } from "antd";
import { WalletKitProvider } from "@gokiprotocol/walletkit";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WalletKitProvider
        defaultNetwork="devnet"
        app={{
          name: "My App",
        }}
      >
        <Button type="primary">Button</Button>
      </WalletKitProvider>
    </div>
  );
}

export default App;
